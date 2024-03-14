import React, { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TimelineContentProps {
  children: ReactNode
}

const TimelineContent: React.FC<TimelineContentProps> = ({ children }) => (
    <div className={cn('ml-2')}>{children}</div>
)
TimelineContent.displayName = 'TimelineContent'

const TimelineDot: React.FC = () => <div className={cn('absolute flex items-center justify-center -start-3 ring-8 ring-whiteh-8 w-8 bg-gray-700 rounded-full')}></div>
TimelineDot.displayName = 'TimelineDot'

interface TimelineIconProps {
  children?: ReactNode
  className?: string
}

const TimelineIcon: React.FC<TimelineIconProps> = ({ children, className }) => (
  <span className={cn('absolute flex items-center justify-center w-6 h-6 bg-accent-foreground rounded-full -start-3 ring-1 ring-egg-50', className)}>{children}</span>
)
TimelineIcon.displayName = 'TimelineIcon'

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ children, className }) => (
  <div className={cn('mb-10 ms-6', className)}>
    <TimelineIcon />
    <TimelineContent>{children}</TimelineContent>
  </div>
)
TimelineItem.displayName = 'TimelineItem'

interface TimelineTitleProps {
  children: ReactNode
  className?: string
}

const TimelineTitle: React.FC<TimelineTitleProps> = ({ children, className }) => <h3 className={cn('flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white', className)}>{children}</h3>
TimelineTitle.displayName = 'TimelineTitle'

interface TimelineDateProps {
  children: ReactNode
  className?: string
}

const TimelineDate: React.FC<TimelineDateProps> = ({ children, className }) => <time className={cn('text-sm font-normal leading-none text-gray-400 dark:text-gray-500', className)}>{children}</time>
TimelineDate.displayName = 'TimelineDate'

interface TimelineProps {
  children: React.ReactNode
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  const timelineItems = React.Children.toArray(children)

  return (
    <div className={cn('relative mt-6 ml-6 border-s border-accent-foreground')}>
      {timelineItems.map((child, index) => (
        <React.Fragment key={index}>
          {child}
        </React.Fragment>
      ))}
    </div>
  )
}
Timeline.displayName = 'Timeline'

export { Timeline, TimelineItem, TimelineTitle, TimelineDate, TimelineIcon, TimelineContent }
