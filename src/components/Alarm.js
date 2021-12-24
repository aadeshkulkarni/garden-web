
import Toggle from './commons/Toggle'
const Alarm = ({ timerInfo, setTimerInfo, onSetTimerHandler }) => {

  const onStatusChangeHandler = (value) => {
    setTimerInfo({ ...timerInfo, status: value })
  }
  return (
    <div className="f">
      <div className="flex flex-col justify-center w-full p-4 text-sm tracking-wider text-gray-100 opacity-75 ">
        <Toggle
          id="alarm"
          title="Alarm"
          toggleStatus={timerInfo.status}
          onStatusChange={(value) => {
            console.log(value)
            onStatusChangeHandler(value)
          }}
          size="s"
          type="h"
        />
        {timerInfo.status &&
          timerInfo.duration &&
          timerInfo.hour &&
          timerInfo.minutes &&
          timerInfo.seconds && (
            <>
              <div className="flex justify-between p-2 mb-2 text-white border-b border-gray-500 text-md ">
                <span>Timer: </span>
                <span>
                  {timerInfo.time.split(':')[0] || '00'}:
                  {timerInfo.time.split(':')[1] || '00'}:
                  {timerInfo.time.split(':')[2] || '00'}:
                </span>
              </div>
              <div className="flex justify-between p-2 mb-2 text-white border-b border-gray-500 text-md ">
                <span>Watering Duration: </span>
                <span>{timerInfo.duration} Seconds</span>
              </div>
            </>
          )}
      </div>
      {timerInfo.status && (
        <>
          <div className="grid grid-cols-3 gap-4">
            <h6 className="col-span-1 px-4 py-2 mx-2 text-sm tracking-widest text-left text-gray-100 opacity-75">
              Timer:
            </h6>
            <div className="flex justify-center col-span-2 pr-4">
              <input
                className="w-16 h-12 p-2 pr-0 m-1 mr-0 text-sm text-center border border-gray-700 rounded-r-none rounded-2xl"
                type="text"
                pattern="\d*"
                maxLength="2"
                placeholder="HH"
                onChange={(e) =>
                  setTimerInfo({ ...timerInfo, time:`${e.target.value}:${timerInfo.time.split(':')[1]}:${timerInfo.time.split(':')[2]}` })
                }
              />
              <input
                className="w-16 h-12 p-2 px-0 m-1 mx-0 text-sm text-center border border-gray-700 rounded-none"
                type="text"
                pattern="\d*"
                maxLength="2"
                placeholder="MM"
                onChange={(e) =>
                  setTimerInfo({ ...timerInfo, time:`${timerInfo.time.split(':')[0]}:${e.target.value}:${timerInfo.time.split(':')[2]}` })
                }
              />
              <input
                className="w-16 h-12 p-2 pl-0 m-1 ml-0 text-sm text-center border border-gray-700 rounded-l-none rounded-2xl"
                type="text"
                pattern="\d*"
                maxLength="2"
                placeholder="SS"
                onChange={(e) =>
                  setTimerInfo({ ...timerInfo, time:`${timerInfo.time.split(':')[0]}:${timerInfo.time.split(':')[1]}:${e.target.value}` })
                }
              />
            </div>
            <h6 className="col-span-1 px-4 py-2 mx-2 text-sm tracking-widest text-left text-gray-100 opacity-75">
              Duration:{' '}
            </h6>
            <div className="flex justify-center col-span-2 pr-4">
              <input
                className="h-12 p-2 m-1 text-center border border-gray-700 cursor-pointer rounded-2xl"
                type="text"
                pattern="\d*"
                maxLength="2"
                placeholder="In seconds"
                onChange={(e) =>
                  setTimerInfo({ ...timerInfo, duration: e.target.value })
                }
              />
            </div>
          </div>
          <div className="p-2 px-4">
            <button
              className="w-full p-4 my-2 text-sm font-semibold text-center text-white border border-emerald-700 bg-emerald-600 bg-gradient-to-tr rounded-2xl"
              onClick={onSetTimerHandler}
            >
              SET TIMER
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Alarm
