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

import { Header } from '../organisms/Header';
import { Presentation } from '../organisms/Presentation';
import { Tecnology } from '../organisms/Tecnology';

import nestjs from '../../../public/icons/nest.svg';
import nextjs from '../../../public/icons/next.svg';
import Image from 'next/image';

export function Landing() {

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
            <Tecnology
              title='HTML5'
              complete={1}
              ReactIcon={DiHtml5}
            />
            <Tecnology
              title='CSS'
              complete={1}
              ReactIcon={DiCss3}
            />
            <Tecnology
              title='Javascript'
              complete={1}
              ReactIcon={DiJsBadge}
            />
            <Tecnology
              title='Python'
              complete={.8}
              ReactIcon={DiPython}
            />
            <Tecnology
              title='React'
              complete={.9}
              ReactIcon={DiReact}
            />
            <Tecnology
              title='Git'
              complete={.9}
              ReactIcon={DiGit}
            />
            <Tecnology
              title='MySQL'
              complete={.6}
              ReactIcon={DiMysql}
            />
            <Tecnology
              title='PostgreSQL'
              complete={.5}
              ReactIcon={DiPostgresql}
            />
            <Tecnology
              title='NodeJS'
              complete={.85}
              ReactIcon={DiNodejs}
            />
            <Tecnology
              title='NestJS'
              complete={.65}
              Icon={() => <Image
                src={nestjs}
                alt='NestJS'
                width={36}
                height={36}
              />}
            />
            <Tecnology
              title='NextJS'
              complete={.65}
              Icon={() => <Image
                src={nextjs}
                alt='NextJS'
                width={36}
                height={36}
              />}
            />
          </div>
        </section>
        <br/>
        <br/>
      </main>
    </>
  )
}