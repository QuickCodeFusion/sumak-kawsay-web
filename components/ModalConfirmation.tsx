import { Dialog, DialogContent } from './ui/modal'
import { ButtonUI } from './ui/button'
import { useWriteEndSale } from '@/utils/useWriteEndSale'
import { useAccount } from 'wagmi'
const ModalConfirmation = ({ open, setOpen, setShown }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, setShown: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element => {
  const { address } = useAccount()
  const { writeAsync } = useWriteEndSale(address ?? '0x')
  return (
        <Dialog open={open} onOpenChange={() => { setOpen(false) }}>
            <DialogContent className='flex flex-col gap-4 p-6 justify-center items-center text-center' >
                <p className='text-xl font-bold'>Are you sure you will finish the contract?</p>
                <h1 className='text-red-500'>This action cannot be undone</h1>
                <span className='flex gap-4'>
                  <ButtonUI onClick={() => { setOpen(false) }} >Cancel</ButtonUI>
                  <ButtonUI className='bg-red-500' onClick={() => {
                    writeAsync({
                    })
                      .then(() => {
                        setShown(true)
                      })
                      .then(() => {
                        setOpen(false)
                        console.log('finish')
                      })
                      .catch((error: any) => {
                        setShown(true)
                        console.log(error)
                      })
                  }
                }
                  >Finish</ButtonUI>
                </span>
            </DialogContent>
        </Dialog>
  )
}

export default ModalConfirmation
