const ProgressBar = ({ progress, className }: { progress: number, className?: string }): JSX.Element => {
  return (
      <div className="w-3/4 bg-gray-200 rounded-3xl">
        <div
          className="bg-blue-800 h-5 rounded-3xl transition-all duration-300"
          style={{ width: `${progress}%` }}
        >
            <p className={'text-center text-sm ' + className}>{progress}%</p>
        </div>
      </div>
  )
}

export default ProgressBar
