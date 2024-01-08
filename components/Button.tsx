import Link from 'next/link'
import { ButtonUI } from './ui/button'

const Button = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
        <ButtonUI asChild>
            <Link href="/login">{children}</Link>
        </ButtonUI>
  )
}

export default Button
