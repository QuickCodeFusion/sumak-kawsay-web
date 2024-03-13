'use client'
import { useAccount } from 'wagmi'
import { ButtonUI } from '../ui/button'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { CloseIcon } from '../Icons/CloseIcon'
import { useOwner } from '@/utils/useOwner'
import { useWriteEndSale } from '@/utils/useWriteEndSale'

const ClosePresale = ({ open, setOpen, shown }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, shown: boolean }): JSX.Element => {
  // const [open, setOpen] = useState(false)
  const { address } = useAccount()
  const owner = useOwner()

  const { isLoading, status } = useWriteEndSale(address ?? '0x')

  useEffect(() => {
    if (isLoading && shown) {
      toast.loading(
        'Processing', {
          style: { background: 'yellow', color: '#000' },
          duration: 3000
        }
      )
    }
    if (status === 'success') {
      toast.success(
        'USDT transferred', {
          style: { background: 'green', color: '#FFF' }
        }
      )
      window.location.reload()
    }
  }, [isLoading, shown, status])

  if (owner !== address || !owner) {
    return <></>
  }

  return (
    <>
      <ButtonUI
        className='border-b bg-red-600/60 hover:bg-background rounded-none'
        variant='ghost'
        onClick={() => { setOpen(true) } }
      >
        <CloseIcon />
      </ButtonUI>
    </>
  )
}

export default ClosePresale
