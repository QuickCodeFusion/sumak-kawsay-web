import { type PropsWithChildren } from 'react'

export const CardList: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
          {children}
        </div>
  )
}
