import { type PropsWithChildren } from 'react'

export const CardList: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
        <div className='z-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {children}
        </div>
  )
}
