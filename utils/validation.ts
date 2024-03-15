export const validateBuy = (usdtbalance: number, amount: number, usdtpay: number): string => {
  if (usdtbalance < usdtpay) return 'Not enough USDT'
  return ''
}
