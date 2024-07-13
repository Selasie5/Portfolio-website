import React from 'react'
import Link from "next/link"
import { IconBaseProps } from 'react-icons'

interface IconProps {
    icon :React.ComponentType<IconBaseProps>
    socialLink: string
}

const SocialConnect:React.FC<IconProps>= ({icon:Icon,socialLink}) => {
  return (
    <div className='bg-white/20 p-[0.7rem] rounded-xl text-white'>
        <Link href={socialLink}>
        <Icon size={30}/>
        </Link>  
        </div> 
  )
}

export default SocialConnect