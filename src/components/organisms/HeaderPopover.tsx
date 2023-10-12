'use client';

import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { FaSun, FaMoon } from 'react-icons/fa';
import Image from 'next/image';

import usaFlag from '../../../public/icons/usa.webp';
import brazilFlag from '../../../public/icons/brazil.jpg';

export function HeaderPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className='px-2 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-all' aria-label='Update dimensions'>
          <MixerHorizontalIcon
            className='stroke-white'
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='w-44 h-44 p-2 bg-slate-600 rounded text-white shadow-sm shadow-black' sideOffset={5}>

          <Popover.Close aria-label='Close'>
            <Cross2Icon
              fontSize={20}
            />
          </Popover.Close>

          <div>
            <section>
              <h3 className='text-lg font-semibold'>Tema</h3>
              <div className='flex items-center gap-2'>
                <button>
                  <FaSun
                    size={20}
                    className='fill-gray-500'
                  />
                </button>
                <button>
                  <FaMoon
                    size={20}
                    className='fill-emerald-500'
                  />
                </button>
              </div>
            </section>

            {/** <section>
              <h3 className='text-lg font-semibold'>Idioma</h3>
              <div className='flex items-center gap-2'>
                <button>
                  <Image
                    src={usaFlag}
                    alt='Usa flag'
                    className='w-10'
                  />
                </button>
                <button className='border-2 border-emerald-500'>
                  <Image
                    src={brazilFlag}
                    alt='Brazil flag'
                    className='w-10'
                  />
                </button>
              </div>
            </section>
			 **/}

          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
