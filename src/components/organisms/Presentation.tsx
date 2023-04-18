'use client'

import Image from 'next/image';

import { useInnerSize } from '@/hooks/useInnerSize';

export function Presentation() {

  const avatarUrl = 'https://cdn.discordapp.com/attachments/593148323624386560/1097650201415651448/c4471fd2b32a4d8668b6504db35cebf9.png';
  const blurAvatarUrl = 'https://cdn.discordapp.com/avatars/493462053344772099/c4471fd2b32a4d8668b6504db35cebf9.webp?size=80';

  const { width } = useInnerSize();
  const avatarSize = 
    width > 768
    ? width * .2    // Desktop size
    : width * .65;  // Mobile size

  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center gap-10'>
      <section className='flex flex-col items-center gap-3'>
        <div
          className='p-2 bg-slate-600 shadow-sm shadow-black rounded-full'
          style={{
            width: avatarSize,
            height: avatarSize,
          }}
        >
          <Image
            src={avatarUrl}
            blurDataURL={blurAvatarUrl}
            alt='Avraham photo'
            width={avatarSize}
            height={avatarSize}
            className='rounded-full'
          />
        </div>
        <div className='text-white'>
          <h2 className='text-lg font-semibold'>Desenvolvedor Full-Stack</h2>
          <p>NestJS | NextJS | React-Native</p>
        </div>
      </section>
      <section className='text-white w-full px-1/10 md:w-1/3 md:px-0'>
        <h3 className='text-lg font-semibold'>Sobre mim</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Pellentesque at scelerisque odio, et sodales lacus. Sed interdum dolor in odio blandit, a porttitor ex accumsan. Duis facilisis tristique elit, vel viverra justo dictum blandit. Pellentesque feugiat, est ac venenatis blandit, tellus orci fringilla nibh, eget consectetur erat neque at lacus. Aenean in semper nunc, eu lacinia odio. Integer tincidunt feugiat velit, a consectetur mi interdum at.</p>
      </section>
    </div>
  )
}