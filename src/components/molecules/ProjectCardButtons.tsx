import Link from 'next/link';
import { Project } from '@/domain/entities/Project';
import { ProjectLinks } from './ProjectLinks';

export interface ProjectCardButtonsProps {
  project: Project
}
export function ProjectCardButtons({ project }: ProjectCardButtonsProps) {
  return (
    <div className=' text-white w-full flex justify-between items-center gap-3'>
      <Link
        href={`project/${project.id}`}
        className='w-2/5 rounded py-1 bg-emerald-500 hover:bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all flex justify-center items-center'
      >
        <span>Ver sobre</span>
      </Link>
      
      <ProjectLinks project={project}/>
    </div>
  )
}
