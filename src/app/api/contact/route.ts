import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, business, budget, message } = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = '6859509255';

    if (botToken) {
      const text = `🔔 *New Lead from MarkyDev Website*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n🏢 *Business:* ${business || 'N/A'}\n💰 *Budget:* ${budget || 'N/A'}\n💬 *Message:* ${message}`;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
