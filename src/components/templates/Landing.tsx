import {
  DiPython,
  DiReact,
  DiMysql,
  DiPostgresql,
  DiGit,
  DiDocker,
} from 'react-icons/di';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { Header } from '../organisms/Header';
import { Presentation } from '../organisms/Presentation';
import { ProjectCard } from '../organisms/ProjectCard';
import { Tecnology } from '../organisms/Tecnology';
import { Service } from '../organisms/Service';
import { Footer } from '../organisms/Footer';

import developMobile from '../../../public/develop-mobile.svg';
import developWeb from '../../../public/develop-web.svg';
import developApi from '../../../public/develop-api.svg';
import nestjs from '../../../public/icons/nest.svg';
import nextjs from '../../../public/icons/next.svg';
import tailwindcss from '../../../public/icons/tailwindcss.svg';

export function LandingTemplate() {

  const tecnologies = [
    {
      title: 'React',
      reactIcon: DiReact,
    },
    {
      title: 'React Native',
      reactIcon: DiReact,
    }, {
      title: 'Tailwind CSS',
        icon: () => <Image
        src={tailwindcss}
        alt='Tailwind CSS'
        width={36}
        height={36}
      />
    },
    {
      title: 'NestJS',
        icon: () => <Image
        src={nestjs}
        alt='NestJS'
        width={36}
        height={36}
      />
    },
    {
      title: 'NextJS',
        icon: () => <Image
        src={nextjs}
        alt='NextJS'
        width={36}
        height={36}
      />
    }, {
      title: 'Python',
      reactIcon: DiPython,
    }, {
      title: 'Git',
      reactIcon: DiGit,
    }, {
      title: 'MySQL',
      reactIcon: DiMysql,
    },
    {
      title: 'PostgreSQL',
      reactIcon: DiPostgresql,
    },
    {
      title: 'Docker',
      reactIcon: DiDocker,
    },
  ]

  // TODO: Decoupling components
  return (
    <>
      <Header/>
      <br/>
      <main className='w-full'>
        <Presentation/>
        <br/>
        <br/>
        <br/>
        <section>
          <h3 className='text-center text-white text-xl font-semibold'>Meus projetos</h3>
          <br/>
          <div className='flex flex-wrap gap-10 justify-center'>
            <ProjectCard
              project={{
                id: 'any_project_id',
                name: 'NLW Habits',
                previewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.',
                external: 'external_project_link',
                github: 'project_repository',
              }}
            />
            <ProjectCard
              project={{
                id: 'any_project_id',
                name: 'NLW Habits',
                previewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.',
                external: '',
                github: 'project_repository',
              }}
            />
            <ProjectCard
              project={{
                id: 'any_project_id',
                name: 'NLW Habits',
                previewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.',
                external: 'external_project_link',
                github: '',
              }}
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
        <br/>
        <br/>
        <section>
          <h3 className='text-center text-white text-xl font-semibold'>Minhas Tecnologias</h3>
          <br/>
          <div className='flex flex-wrap gap-10 justify-center'>
            {tecnologies.map(tecnology => (
              <Tecnology
                key={tecnology.title}
                title={tecnology.title}
                Icon={tecnology.icon}
                ReactIcon={tecnology.reactIcon}
              />
            ))}
          </div>
        </section>
        <br/>
        <br/>
        <section className='w-full'>
          <h3 className='text-center text-white text-xl font-semibold'>Meus serviços</h3>
          <br/>
          <div className='w-full md:px-5 flex flex-wrap gap-10 justify-center items-center'>
              <Service
                title='Desenvolvimento mobile'
                image={developMobile}
              />
              <Service
                title='Desenvolvimento web'
                image={developWeb}
              />
              <Service
                title='API Rest'
                image={developApi}
              />
          </div>
        </section>
        <br/>
        <br/>
      </main>
      <Footer/>
    </>
  )
}