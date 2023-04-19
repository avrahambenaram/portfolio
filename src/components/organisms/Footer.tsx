import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='w-full h-10 bg-gray-600 px-10 flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <a href='https://github.com/avrahambenaram' target='_blank'>
          <FaGithub
            size={24}
            color='#fff'
          />
        </a>
        <a href='https://www.linkedin.com/in/avraham-ben-aram-321a71208/' target='_blank'>
          <FaLinkedin
            size={24}
            color='#fff'
          />
        </a>
      </div>
      <p className='text-white'>
        Desenvolvido por <span className='text-emerald-500'>
          <Link href='/'>Avraham</Link>
        </span>
      </p>
    </footer>
  )
}