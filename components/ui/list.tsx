import * as React from 'react'
import { cn } from '@/lib/utils'

const ListCard = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        'flex justify-between w-full flex-col gap-4',
        className
      )}
      {...props}
    />
  )
)
ListCard.displayName = 'ListCard'

const ListItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('border-b-2 border-border-secondary flex justify-between w-full', className)} {...props} />
  )
)
ListItem.displayName = 'ListItem'

const ListCardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
ListCardTitle.displayName = 'ListCardTitle'

const ListCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-2 pt-0', className)} {...props} />
  )
)
ListCardContent.displayName = 'ListCardContent'

export { ListCard, ListItem, ListCardTitle, ListCardContent }
