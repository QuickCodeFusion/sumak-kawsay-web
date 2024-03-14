import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import Countdown from 'react-countdown'

const timerVariants = cva(
  'flex items-center justify-center rounded-full bg-transparent px-4 py-1.5 text-sm font-semibold',
  {
    variants: {
      size: {
        default: 'h-auto w-24 text-md',
        sm: 'h-auto w-12 text-sm',
        lg: 'h-auto w-fit text-4xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

interface TimerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof timerVariants> {
  time: number
  exactDate?: Date
}

export function Timer ({ time, exactDate, size, className, ...props }: TimerProps): React.JSX.Element {
  return (
        <Countdown
            date={exactDate ?? new Date(Date.now() + time * 1000)}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <div className={cn(timerVariants({ size, className }))}> 00 : 00 : 00 : 00</div>
              } else {
                return (
                        <div
                            className={cn(timerVariants({ size, className }))}
                            {...props}
                        >
                            {days}d : {hours}h : {minutes}m : {seconds}s
                        </div>
                )
              }
            }}
        />
  )
}
