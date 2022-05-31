import { Currency, ETHER, Token } from '@ftm1337/sdk15'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'MTV'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
