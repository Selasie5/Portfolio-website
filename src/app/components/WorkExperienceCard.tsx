import React from 'react'
import Link from "next/link"

interface WorkExperienceProps{
    startDate: string |  number,
    endDate: string,
    role: string,
    company: string,
    valuePresentedAtCompany1: string
    valuePresentedAtCompany2: string
    valuePresentedAtCompany3: string
    techStack1: string,
    techStack2: string,
    techStack3: string,
    techStack4: string,
}
const WorkExperienceCard :React.FC<WorkExperienceProps> = ({startDate,endDate,role, company, valuePresentedAtCompany1, valuePresentedAtCompany2, valuePresentedAtCompany3,techStack1, techStack2, techStack3, techStack4}) => {

  return (
    <div className='flex flex-col md:flex-row  justify-center md:justify-between items-start md:items-center gap-y-8 gap-x-96'>
        <div className='md:w-3/5 flex flex-col items-start justify-center gap-y-3'>
            <p className="font-Poppins text-white/50 font-light text-lg uppercase tracking-wider">{startDate} - {endDate}</p>
                <h4 className='text-4xl font-light text-white font-Sans'>{role}, {" "}{company}</h4>
                <ul>
                    <li className='bullet'>
                    <p className="text-white/70 text-[1rem] font-light font-Plus">-- {valuePresentedAtCompany1}</p>
                    <p className="text-white/70 text-[1rem] font-light font-Plus">-- {valuePresentedAtCompany2}</p>
                    <p className="text-white/70 text-[1rem] font-light font-Plus">-- {valuePresentedAtCompany3}</p>
                    </li>
                </ul>

                <div className=' flex flex-wrap items-center justify-start gap-4'>
                        <div className='border border-white/80 rounded-full px-5 py-1 '>
                        <span className='font-normal text-white/80 font-Poppins text-sm'>{techStack1}</span>
                        </div>
                        <div className='border border-white/80 rounded-full px-5 py-1'>
                        <span className='font-normal text-white/80 font-Poppins text-sm'>{techStack2}</span>
                        </div>
                        <div className='border border-white/80 rounded-full px-5 py-1'>
                        <span className='font-normal text-white/80 font-Poppins text-sm'>{techStack3}</span>
                        </div>
                        <div className='border border-white/80 rounded-full px-5 py-1'>
                        <span className='font-normal text-white/80 font-Poppins text-sm'>{techStack4}</span>
                        </div>
                </div>
            </div>
            <div>
            <button className='border border-white/80 px-6 py-2 rounded-full'>
                <Link href="https://www.linkedin.com/in/selasiekofisepenu/details/experience/" className='text-white/80 font-Poppins'>
                Visit Link
                </Link>
                </button>
            </div>
           
    </div>
  )
}

export default WorkExperienceCard