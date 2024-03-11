import { useSelector } from '@/lib/redux/hooks'
export const validateBuy = (value: number, amount: number): string => {
  const { currentPrice } = useSelector((state) => state.currentPrice)
  if (value < currentPrice) return 'Amount must be greater than current price'
  if (!Number.isInteger(amount)) return 'An integer is required to make a purchase.'
  return ''
}
