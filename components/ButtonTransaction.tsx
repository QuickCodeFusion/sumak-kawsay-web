'use client'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
const ButtonTransaction = ({ hash, description }: { hash: string, description: string }): React.JSX.Element => {
  const addRecentTransaction = useAddRecentTransaction()
  return (
      <button
      className='text-white'
        onClick={() => {
          addRecentTransaction({
            hash,
            description
          })
        }}
      >
        Add recent transaction
      </button>
  )
}

export default ButtonTransaction
