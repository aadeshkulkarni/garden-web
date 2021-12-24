import ProgressBar from './commons/ProgressBar'
const GardenStats = ({temperature,humidity}) => {
 
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 lg:grid-cols-4">
      <div className="flex flex-col items-center justify-center w-40 h-40 p-2 bg-gray-900 border border-gray-900 shadow-md shadow-gray-800 rounded-2xl">
        <label className="p-1 text-sm text-gray-100">Temperature</label>
        <ProgressBar percent={temperature} suffix="°C" colorRange={{"low":[34,100],"medium":[0,20],"high":[21,33]}}/>
      </div>
      <div className="flex flex-col items-center justify-center w-40 h-40 p-2 bg-gray-900 border border-gray-900 shadow-md shadow-gray-800 rounded-2xl">
        <label className="p-1 text-sm text-gray-100">Humidity</label>
        <ProgressBar percent={humidity} suffix="%" colorRange={{"low":[0,33],"medium":[34,66],"high":[67,100]}} />
      </div>
      <div className="flex flex-col items-center justify-center w-40 h-40 p-2 bg-gray-900 border border-gray-900 shadow-md shadow-gray-800 rounded-2xl">
        <label className="p-1 text-sm text-gray-100">pH Level</label>
        <ProgressBar percent={85} suffix="%" colorRange={{"low":[0,33],"medium":[34,66],"high":[67,100]}}/>
      </div>
      <div className="flex flex-col items-center justify-center w-40 h-40 p-2 bg-gray-900 border border-gray-900 shadow-md shadow-gray-800 rounded-2xl">
        <label className="p-1 text-sm text-gray-100">Climate</label>
        <ProgressBar percent={55} suffix="°C" colorRange={{"low":[0,33],"medium":[34,66],"high":[67,100]}}/>
      </div>
    </div>
  )
}

export default GardenStats
