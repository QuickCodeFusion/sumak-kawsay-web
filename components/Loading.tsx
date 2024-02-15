const Loading = (): JSX.Element => {
  return (
    <div className="flex flex-row gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 backdrop-blur h-screen w-screen items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.1s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.5s]"></div>
    </div>
  )
}

export default Loading
