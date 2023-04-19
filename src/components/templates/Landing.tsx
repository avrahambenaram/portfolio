import {
  DiJsBadge,
  DiPython,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMysql,
  DiPostgresql,
  DiNodejs,
  DiGit,
} from 'react-icons/di';
import Image from 'next/image';

import { Header } from '../organisms/Header';
import { Presentation } from '../organisms/Presentation';
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
      title: 'HTML5',
      complete: 1,
      reactIcon: DiHtml5,
    },
    {
      title: 'CSS',
      complete: 1,
      reactIcon: DiCss3,
    },
    {
      title: 'Javascript',
      complete: 1,
      reactIcon: DiJsBadge,
    },
    {
      title: 'Python',
      complete: .8,
      reactIcon: DiPython,
    },
    {
      title: 'React',
      complete: .9,
      reactIcon: DiReact,
    },
    {
      title: 'React Native',
      complete: .9,
      reactIcon: DiReact,
    },
    {
      title: 'Git',
      complete: .9,
      reactIcon: DiGit,
    },
    {
      title: 'MySQL',
      complete: .6,
      reactIcon: DiMysql,
    },
    {
      title: 'PostgreSQL',
      complete: .5,
      reactIcon: DiPostgresql,
    },
    {
      title: 'NodeJS',
      complete: .9,
      reactIcon: DiNodejs,
    },
    {
      title: 'NestJS',
      complete: .65,
        icon: () => <Image
        src={nestjs}
        alt='NestJS'
        width={36}
        height={36}
      />
    },
    {
      title: 'NextJS',
      complete: .75,
        icon: () => <Image
        src={nextjs}
        alt='NextJS'
        width={36}
        height={36}
      />
    },
    {
      title: 'Tailwind CSS',
      complete: .85,
        icon: () => <Image
        src={tailwindcss}
        alt='Tailwind CSS'
        width={36}
        height={36}
      />
    },
  ]

  // TODO: Decoupling components
  return (
    <>
      <Header/>
      <main className='w-full'>
        <br/>
        <br/>
        <br/>
        <Presentation/>
        <br/>
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
                complete={tecnology.complete}
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