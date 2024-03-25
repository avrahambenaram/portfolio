import Image from 'next/image';
import { Project } from '@/domain/entities/Project';
import habits from '../../../public/projects/habits.png';

export interface ProjectCardPresentationProps {
  project: Project
}
export function ProjectCardPresentation({ project }: ProjectCardPresentationProps) {
  return (
    <>
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
    </>
  )
}
