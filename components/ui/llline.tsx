export const DashLine = ({ className }: { className?: string }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 400 120"
      className={className + 'stroke-current'}
    >
      <path
        d="M200,0 V120"
        fill="none"
        strokeWidth="1"
        stroke="hsl(0, 0%, 80%)"
        strokeDasharray="3 18"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1001">
          <stop offset="0"></stop>
          <stop offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default DashLine
