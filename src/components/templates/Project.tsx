import Image from 'next/image';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';

import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { ProjectLinks } from '../molecules/ProjectLinks';

import fastify from '../../../public/icons/fastify.svg';

//TODO - Decouple component
export function ProjectTemplate() {
  return (
    <>
      <Header/>
      <main className='w-full h-[calc(90%-theme(space.10))] px-10 overflow-auto'>
        <div className='w-full md:flex gap-2 flex-wrap'>
          <div className='w-full h-[45vw] md:w-2/6 md:h-[22vw] bg-cover bg-[url("/projects/habits.png")] group flex justify-center items-center'>
            <div className='w-full h-10 px-2 hidden group-hover:flex justify-between items-center'>
              <button>
                <FaArrowAltCircleLeft
                  color='#fff'
                  size={25}
                />
              </button>
              <button>
                <FaArrowAltCircleRight
                  color='#fff'
                  size={25}
                />
              </button> 
            </div>
          </div>

          <div className='text-white w-full md:w-1/2 flex flex-col gap-2'>
            <h2 className='font-semibold text-lg'>Habits</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.</p>
            <p>Iniciado em <span className='text-emerald-500'>20/03/3095</span></p>
            <p>Desenvolvido em <span className='text-emerald-500'>20/03/3096</span></p>
            <p>Categorias: 
              <ul className='list-style-none flex gap-2'>
                <li className='text-emerald-500'>Mobile</li>
                <li className='text-emerald-500'>Web</li>
                <li className='text-emerald-500'>Back-end</li>
              </ul>
            </p>
            <ProjectLinks project={{
              external: '',
              github: 'ola',
              id: '',
              name: '',
              previewDescription: '',
              description: ''
            }}/>
          </div>
        </div>

        <br/>

        <div className='w-full text-white pr-2'>
          <h2 className='font-semibold text-lg'>Tecnologias utilizadas</h2>
          <div className='flex'>
            <DiReact
              color='#fff'
              size={36}
            />
            <Image
              src={fastify}
              alt='Fastify'
              width={36}
              height={36}
            />
          </div>
        </div>

        <br/>

        <div className='w-full text-white pr-2'>
          <h2 className='font-semibold text-lg'>Como foi desenvolver (Experiência)</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.</p>
        </div>

        <br/>

        <div className='w-full text-white pr-2'>
          <h2 className='font-semibold text-lg'>Depoimento do cliente</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.</p>
        </div>

        <br/>
        
      </main>
      <Footer/>
    </>
  )
}
