import React from 'react'
import Link from "next/link"
import {  FaLink  } from "react-icons/fa6";

interface LinkProps {
    liveLink: string
}
const ViewLiveLink:React.FC<LinkProps> = ({liveLink}) => {
  return (
    <div className="p-3 rounded-xl bg-white/30 text-black group hover:bg-black/30 hover:text-white">
                    <Link href={liveLink} className="flex flex-row justify-center items-center gap-4">
                    <FaLink size={30}/>
                    <span className='hidden group-hover:block transition-all text-black group-hover:text-white font-Plus font-semibold text-sm'>View Live Project</span>
                    </Link>
                    </div>
  )
}

export default ViewLiveLink