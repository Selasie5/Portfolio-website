import React from 'react'
import { IconBaseProps } from 'react-icons'

interface TechStackProps {
    language: string,
    icon: React.ComponentType<IconBaseProps>,
    domain: string
  }

const TechStackCard:React.FC<TechStackProps> = ({language, icon:Icon, domain}) => {
  return (
    <div className={`flex items-center justify-center gap-x-2 px-6 py-2 text-white text-lg font-medium rounded-full group hover:text-white border-white ${domain === "frontend" ? "bg-purple-500/20 hover:bg-purple-500": domain === "backend"? "bg-green-500/20": domain === "database" ?"bg-amber-500/40 hover:bg-amber-500": domain === "testing"? "bg-cyan-400/40 hover:bg-cyan-500":"bg-blue-500/40 hover:bg-blue-500"} hover:cursor-pointer`}>
        <Icon size= {20} className="hidden group-hover:block transition"/>
        <span className='font-Sans'>{language}</span>
    </div>
  )
}

export default TechStackCard