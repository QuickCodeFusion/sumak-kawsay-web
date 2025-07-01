export const DashLine = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 400 135"
      className={className + 'stroke-current'}
    >
      <path
        d="M200,0 V200"
        fill="none"
        strokeWidth="1"
        strokeDasharray="4 20"
      ></path>
    </svg>
  )
}

export default DashLine
