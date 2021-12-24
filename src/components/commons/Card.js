import React, { useState } from 'react'

const Card = ({ cardTitle, cardSubtitle, thumbnailImgSrc, children }) => {
  const [showCardBody, setShowCardBody] = useState(false)
  return (
    <div className="flex flex-col p-2 my-4">
      <div className="relative flex items-center justify-between w-full p-2 text-gray-100 bg-gray-900 border border-gray-900 shadow-md h-28 shadow-gray-800 rounded-2xl">
        <div className="w-20 h-20 p-2 bg-gray-700 border border-gray-800 rounded-2xl">
          <img src={thumbnailImgSrc} />
        </div>
        <div className="flex-grow p-2 pl-2">
          <div className="p-2 pl-2 font-extrabold text-md">{cardTitle}</div>
          <div className="pl-2 text-sm font-extralight">{cardSubtitle}</div>
        </div>
        <div className="absolute text-white cursor-pointer right-4 top-6">
          <img
            className={`transition ease-in-out delay-150 duration-300 w-4 h-4 ${
              showCardBody ? 'rotate-180' : ''
            }`}
            src="/caret-down.png"
            onClick={(e) => setShowCardBody(!showCardBody)}
          />
        </div>
      </div>
      {showCardBody && (
        <div className="flex-grow w-full bg-gray-900 border border-gray-800 rounded-t-none shadow-md shadow-gray-700 rounded-2xl h-96">
          {children}
        </div>
      )}
    </div>
  )
}

export default Card
