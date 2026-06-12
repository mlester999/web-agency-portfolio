import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, business, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Format Telegram message
    const text = [
      '📬 *New Contact Form Submission*',
      '',
      `👤 *Name:* ${escapeMd(name)}`,
      `📧 *Email:* ${escapeMd(email)}`,
      business ? `🏢 *Business:* ${escapeMd(business)}` : null,
      budget ? `💰 *Budget:* ${escapeMd(budget)}` : null,
      '',
      `💬 *Message:*`,
      escapeMd(message),
    ]
      .filter(Boolean)
      .join('\n');

    // Send Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || '6859509255';

    if (botToken) {
      const tgRes = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'MarkdownV2',
          }),
        }
      );

      if (!tgRes.ok) {
        const err = await tgRes.text();
        console.error('Telegram send failed:', err);
      }
    } else {
      console.warn('TELEGRAM_BOT_TOKEN not set — skipping notification');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

function escapeMd(str: string): string {
  return str.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}
