import { Dialog, DialogContent } from './ui/modal'
import { ButtonUI } from './ui/button'
const ModalConfirmation = ({ open, setOpen, writeAsync, setShown }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, writeAsync: any, setShown: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element => {
  return (
        <Dialog open={open} onOpenChange={() => { setOpen(false) }}>
            <DialogContent >
                <p>Are you sure you will finish the contract?</p>
                <ButtonUI onClick={() => { setOpen(false) }} >Cancel</ButtonUI>
                <ButtonUI onClick={() => {
                  writeAsync({
                  }).then(() => {
                    setShown(true)
                  }).catch((error: any) => {
                    setShown(true)
                    console.log(error)
                  })
                }
        } >Finish</ButtonUI>
            </DialogContent>
        </Dialog>
  )
}

export default ModalConfirmation
