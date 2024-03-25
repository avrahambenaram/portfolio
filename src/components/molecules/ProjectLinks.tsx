import { Project } from '@/domain/entities/Project';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className='flex items-center gap-2'>
    {
      project.external
      ? <a
        href='#'
        target='_blank'
        className='p-2 rounded border-2 border-transparent hover:border-emerald-500 transition-all'
      >
        <FaExternalLinkAlt
          size={22}
          className='fill-emerald-500'
        />
      </a>
      : <a
        title='Não há uma preview'
        target='_blank'
        className='p-2 border-2 border-transparent cursor-not-allowed'
      >
        <FaExternalLinkAlt
          size={22}
          className='fill-gray-500'
        />
      </a>
    }
    {
      project.github
      ? <a
        href='#'
        target='_blank'
        className='p-2 rounded border-2 border-transparent hover:border-emerald-500 transition-all'
      >
        <FaGithub
          size={22}
          className='fill-emerald-500'
        />
      </a>
      : <a
        title='Código fonte protegido'
        target='_blank'
        className='p-2 border-2 border-transparent cursor-not-allowed'
      >
        <FaGithub
          size={22}
          className='fill-gray-500'
        />
      </a>
    }
    </div>
  )
}
