import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/domain/entities/Project';

// TODO: Dynamic projects
export function MyProjects() {

  const project = new Project({
    id: 'any_project_id',
    name: 'NLW Habits',
    previewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.',
    external: 'external_project_link',
    github: 'project_repository',
  });

  return (
    <section>
      <h3 className='text-center text-white text-xl font-semibold'>Meus projetos</h3>
      <br/>
      <div className='flex flex-wrap gap-10 justify-center'>
        <ProjectCard
          project={project}
        />
        <ProjectCard
          project={project}
        />
        <ProjectCard
          project={project}
        />
      </div>
      <div className='w-full mt-10 flex justify-center items-center'>
        <Link
          href='projects'
          className='text-white bg-emerald-500 hover:bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all rounded w-28 py-2 flex justify-center items-center gap-2'
        >
          <span>
            Ver todos
          </span>
          <FaArrowRight size={18}/>
        </Link>
      </div>
    </section>
  )
}
