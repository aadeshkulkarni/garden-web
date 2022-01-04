import React from 'react'

const Header = () => {
    return (
        <div className="fixed top-0 left-0 z-20 w-full p-6 py-8 pt-3 pb-1 bg-gray-800 ">
          <label className="block p-2 px-2 text-xl tracking-widest text-white uppercase border-b border-white font-semiabold header">
            Hydra | <span className="right-0 text-sm tracking-widest font-extralight">Smart Gardening</span>
          </label>
        </div>
    )
}

export default Header
