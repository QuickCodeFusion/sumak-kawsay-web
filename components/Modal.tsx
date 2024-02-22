'use client'
import { Dialog, DialogContent } from './ui/modal'

const Modal = ({ open, children, className, setOpen }: { open: boolean, children?: React.ReactNode, className?: string, setOpen: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element => {
  return (
    <Dialog open={open} onOpenChange={() => { setOpen(false) }}>
        <DialogContent className={className}>
            {children}
        </DialogContent>

    </Dialog>
  )
}

export default Modal
