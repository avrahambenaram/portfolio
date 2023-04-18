import Link from 'next/link';

export function Header() {
  return (
    <header className='w-full h-1/10 text-white px-8 flex justify-between items-center'>
      <h1 className='text-xl'>
        <Link href='/'>Avraham</Link>
      </h1>
      <nav>
        <ul className='flex gap-2'>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/projects'>Projetos</Link>
          </li>
          <li>
            <Link href='/contact'>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}