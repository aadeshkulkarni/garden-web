
const ProgressBar = ({percent,suffix,colorRange}) => {
  // const colorRange={"low":[0,33],"medium":[34,66],"high":[67,100]}
  const circumference = 30 * 2 * Math.PI
  function setColor(percentage) {
    let color = ''
    if (percentage > colorRange.low[0] && percentage < colorRange.low[1]) {
      color = 'text-red-400'
    } else if (percentage >= colorRange.medium[0] && percentage < colorRange.medium[1]) {
      color = 'text-blue-400'
    } else if (percentage >= colorRange.high[0] && percentage <= colorRange.high[1]) {
      color = 'text-green-400'
    } else {
      color = 'text-white'
    }
    return color;
  }
  return (
    <div
      x-data="scrollProgress"
      className="inline-flex items-center justify-center overflow-hidden rounded-full"
    >
      <div className="invisible text-red-400 bg-green-400 border-blue-400"/>
      <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className={setColor(percent)}
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span
        className="absolute text-white transition ease-in-out delay-150 text-md"
        x-text="`${percent}`"
      >
        {percent}{suffix}
      </span>
    </div>
  )
}

export default ProgressBar
