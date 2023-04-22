import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import habits from '../../../public/projects/habits.png';

export interface ProjectProps {
  project: {
    id: string;
    name: string;
    previewDescription: string;
    external: string;
    github: string;
  }
}

// TODO dynamic properties
// TODO Project entity
// TODO Decouple elements
export function Project({ project }: ProjectProps) {
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
        <a
          href='#'
          className='w-2/5 rounded py-1 bg-emerald-500 hover:bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all flex justify-center items-center'
        >
          <span>Ver sobre</span>
        </a>
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
      </div>
    </div>
  )
}