import Image from 'next/image';
import Link from 'next/link';

import { Project  as ProjectDomain } from '@/domain/entities/Project';
import habits from '../../../public/projects/habits.png';
import { ProjectLinks } from '../molecules/ProjectLinks';

export interface ProjectCardProps {
  project: ProjectDomain;
}

// TODO dynamic properties
// TODO Project entity
// TODO Decouple elements
// TODO Dynamic id Linking
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='w-72 md:w-96 p-4 bg-slate-600 border-b-4 border-b-transparent hover:border-b-emerald-500 transition-all rounded-lg flex flex-col items-center'>
        <Image
          src={habits}
          alt='Hábitos'
          className='w-full h-52 object-cover rounded-lg'
        />
        <br/>
        <div className='w-full text-white'>
        <h3 className='text-lg font-semibold'>{project.name}</h3>
        <p>{project.previewDescription}</p>
      </div>
      <br/>
      <div className=' text-white w-full flex justify-between items-center gap-3'>
        <Link
          href='project/any_project_id'
          className='w-2/5 rounded py-1 bg-emerald-500 hover:bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all flex justify-center items-center'
        >
          <span>Ver sobre</span>
        </Link>
        
        <ProjectLinks project={project}/>
      </div>
    </div>
  )
}