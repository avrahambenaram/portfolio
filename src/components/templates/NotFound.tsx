import Link from 'next/link';

import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';

export function NotFoundTemplate() {
  return (
    <>
      <Header/>
      <div className='w-full h-1/10'/>
      <main className='text-white w-full h-[calc(90%-theme(space.10))] gap-2 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-xl'>404: Não encontrado</h1>
        <p>Não foi encontrado nenhum conteúdo para este caminho.</p>
        <Link
          className='bg-emerald-500 hover:bg-emerald-600 rounded transition-all px-4 py-2'
          href='/'
        >
          <span>Home</span>
        </Link>
      </main>
      <Footer/>
    </>
  )
}