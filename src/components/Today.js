import React from 'react'
import { CiCalendarDate } from 'react-icons/ci'

const Today = () => {
  return (
    <div>
        <button
        className="text-[#787486] flex items-center px-6 py-2 rounded-lg border border-[#787486] mb-2 hover:text-black hover:bg-[#e2e0e9] hover:border-transparent"
      >
        <CiCalendarDate size={20} className="mr-2" /> Today
      </button>
    </div>
  )
}

export default Today