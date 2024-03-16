import { useSelector } from '@/lib/redux/hooks'
export const validateBuy = (usdtBalance: number, amount: number, usdtpay: number): string => {
  const { currentPrice } = useSelector((state) => state.currentPrice)
  if (usdtBalance < currentPrice) return 'Not enough USDT'
  if (usdtBalance < usdtpay) return 'Not enough USDT'
  if (!Number.isInteger(amount)) return 'An integer is required to make a purchase.'
  if (isNaN(usdtBalance)) return 'You must connect your wallet to be able to buy'
  return ''
}
