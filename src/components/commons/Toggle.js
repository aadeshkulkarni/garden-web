import React from 'react'

const Toggle = ({ id, title, toggleStatus, onStatusChange, size, type }) => {
  const toggleType = {
    s: ['w-16 h-8', 'w-4 h-4'],
    m: ['w-24 h-10', 'w-6 h-6']
  }
  const onChangeHandler = (e) => {
    onStatusChange(e.target.checked)
  }
  return (
    <div
      className={`flex ${
        type === 'v' && 'flex-col'
      } items-center justify-between w-full h-full px-4 `}
    >
      <label className="p-4 px-2 text-sm tracking-wider uppercase text-gray-50">
        {title}
        {/* {title}: {!toggleStatus ? 'OFF' : 'ON'} */}
      </label>
      <div className="flex items-center justify-center text-white">
        <label
          htmlFor={id}
          className="flex items-center cursor-pointer focus:outline-none"
        >
          <div className="relative">
            <input
              type="checkbox"
              id={id}
              className="sr-only focus:outline-none"
              onChange={onChangeHandler}
            />
            <div
              className={`block ${toggleType[size][0]} ${
                toggleStatus
                  ? 'bg-green-700 border-green-800'
                  : 'bg-gray-600 border-gray-700'
              } border-2  rounded-full`}
            ></div>
            <div
              className={`absolute ${toggleType[size][1]} transition ${
                toggleStatus ? 'bg-gray-300' : 'bg-amber-300'
              } rounded-full dot left-2 top-2`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  )
}
export default Toggle
