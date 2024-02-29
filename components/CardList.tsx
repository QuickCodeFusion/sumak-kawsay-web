import { type PropsWithChildren } from 'react'

export const CardList: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
        <div className='z-10 flex flex-wrap justify-center gap-10'>
          {children}
        </div>
  )
}
