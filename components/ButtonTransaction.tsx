import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
const ButtonTransaction = (): React.JSX.Element => {
  const addRecentTransaction = useAddRecentTransaction()
  return (
      <button
        onClick={() => {
          addRecentTransaction({
            hash: '0x...',
            description: '...'
          })
          console.log('Added recent transaction')
        }}
      >
        Add recent transaction
      </button>
  )
}

export default ButtonTransaction
