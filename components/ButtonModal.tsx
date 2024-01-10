import { ButtonUI } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/modal'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const ButtonModal = (): React.JSX.Element => {
  return (
    <>
    <Dialog className="relative z-50">
      <DialogTrigger asChild>
        <ButtonUI className='w-52 uppercase rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 border-none text-white' variant={'outline'}>Edit Profile</ButtonUI>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you’re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <ButtonUI type="submit">Save changes</ButtonUI>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  )
}
