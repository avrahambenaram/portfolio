import { Project  as ProjectDomain } from '@/domain/entities/Project';
import { ProjectCardButtons } from '@/components/molecules/ProjectCardButtons';
import { ProjectCardPresentation } from '../molecules/ProjectCardPresentation';

export interface ProjectCardProps {
  project: ProjectDomain;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='w-72 md:w-96 p-4 bg-slate-600 border-b-4 border-b-transparent hover:border-b-emerald-500 transition-all rounded-lg flex flex-col items-center'>
      <ProjectCardPresentation project={project} />
      <br/>
      <ProjectCardButtons project={project}/>
    </div>
  )
}
