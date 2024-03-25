import {
  DiPython,
  DiReact,
  DiMysql,
  DiPostgresql,
  DiGit,
  DiDocker,
} from 'react-icons/di';
import Image from 'next/image';

import { Header } from '../organisms/Header';
import { Presentation } from '../organisms/Presentation';
import { Footer } from '../organisms/Footer';

import nestjs from '../../../public/icons/nest.svg';
import nextjs from '../../../public/icons/next.svg';
import tailwindcss from '../../../public/icons/tailwindcss.svg';
import { MyProjects } from '../organisms/MyProjects';
import { MyTecnologies } from '../organisms/MyTecnologies';
import { MyServices } from '../organisms/MyServices';

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

  return (
    <>
      <Header/>
      <br/>
      <main className='w-full'>
        <Presentation/>
        <br/>
        <br/>
        <br/>
        <MyProjects/>
        <br/>
        <br/>
        <MyTecnologies tecnologies={tecnologies} />
        <br/>
        <br/>
        <MyServices/>
        <br/>
        <br/>
      </main>
      <Footer/>
    </>
  )
}
