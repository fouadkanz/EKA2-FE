import { StopCircle } from 'lucide-react'
import React from 'react'

const LoadingBar=({isLaoding})=> {
  return (
    <div className={`flex items-center border rounded-full shadow-sm p-1`}>
          <div
            className={`${
              isLaoding ? "w-full" : " w-1/5"
            } translate-x-0  transition-all duration-1000 ease-in-out transform flex items-center justify-center h-12 bg-gradient-to-r from-[#424549] to-[#9FA6AF] rounded-full`}
          >
            Generating output...
          </div>
          <button className=" p-2 rounded-full">
            <span className="sr-only">Send</span>
            <div className="flex items-center justify-center w-10 h-10 bg-[#334155] rounded-full hover:bg-[#49586d]">
              <StopCircle className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
  )
}

export default LoadingBar
