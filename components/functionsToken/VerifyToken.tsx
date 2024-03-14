'use client'
import { useContractRead, useAccount } from 'wagmi'
import { AbyUsdt, contract, contractUSDT } from '@/utils/AbyContrat'

const VerifyToken = (): JSX.Element => {
  const { address } = useAccount()
  const { data } = useContractRead({
    address: contractUSDT,
    abi: AbyUsdt,
    functionName: 'allowance',
    args: [address, contract]
  })
  const amount = Number(data) / 10 ** 18
  return <div>{amount} USDT</div>
}

export default VerifyToken
