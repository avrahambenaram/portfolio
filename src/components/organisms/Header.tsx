import Link from 'next/link';

export function Header() {
  return (
    <header className='w-full h-1/10 fixed bg-slate-700 lg:bg-transparent text-white px-8 flex justify-between items-center'>
      <h1 className='text-xl hover:text-emerald-400'>
        <Link href='/'>Avraham</Link>
      </h1>
      <nav>
        <ul className='flex gap-2'>
          <li className='hover:text-emerald-400'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='hover:text-emerald-400'>
            <Link href='/projects'>Projetos</Link>
          </li>
          <li className='hover:text-emerald-400'>
            <Link href='/contact'>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}