import React from 'react'
import members2 from "../images/members.png";

const Share = () => {
  return (
    <div>
        <button
        className="text-[#787486] flex items-center px-6 py-2 rounded-lg border border-[#787486] mb-2 hover:text-black hover:bg-[#e2e0e9] hover:border-transparent"
      >
        <img src={members2} size={20} className="mr-2" /> Share
      </button>
    </div>
  )
}

export default Share