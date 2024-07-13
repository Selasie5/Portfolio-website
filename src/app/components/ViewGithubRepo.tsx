import React from 'react'
import Link from "next/link"
import { FaGithub } from 'react-icons/fa6'

interface GithubLinkProps {
    githubLink: string
}
const ViewGithubRepo:React.FC<GithubLinkProps> = ({githubLink}) => {
  return (
    <div className="p-3 rounded-xl bg-white/30 text-black group hover:bg-black/30 hover:text-white">
    <Link href={githubLink} className="flex flex-row justify-center items-center gap-4">
    <FaGithub size={30}/>
    <span className='hidden group-hover:block transition-all text-black group-hover:text-white font-Plus font-semibold text-sm'>View Github Repo</span>
    </Link>
    </div>
  )
}

export default ViewGithubRepo