export interface GeoData {
  country: string;
  currency: 'PHP' | 'USD';
  isPhilippines: boolean;
}

export function detectCurrency(countryCode: string): GeoData {
  const isPH = countryCode === 'PH';
  return {
    country: countryCode,
    currency: isPH ? 'PHP' : 'USD',
    isPhilippines: isPH,
  };
}

export function formatPrice(amount: number, currency: 'PHP' | 'USD'): string {
  if (currency === 'PHP') {
    return `₱${amount.toLocaleString('en-PH')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}
