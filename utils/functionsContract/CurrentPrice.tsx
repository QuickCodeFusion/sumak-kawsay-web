'use client'
import { AbyContractAddress } from '@/configWagmi/AbyContrat'
import { useContractRead } from 'wagmi'
import { setCurrentPrice } from '@/lib/redux/feature/currentPriceSlice'
import { useDispatch } from '@/lib/redux/hooks'

const CurrentPrice = (): JSX.Element => {
  const dispatch = useDispatch()
  const { data, isLoading } = useContractRead({
    address: '0x47633E0A6dA0DD5437D9573619Bf6a989f7816fb',
    abi: AbyContractAddress,
    functionName: '_tokenPrice'
  })
  const price = Number(data) / 10 ** 18
  dispatch(setCurrentPrice(price))
  return (<div className='flex '>{isLoading ? 'loading...' : price}ETH</div>)
}

export default CurrentPrice
