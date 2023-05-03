import { IconType } from "react-icons";

export interface TecnologyProps {
  title: string;
  ReactIcon?: IconType;
  Icon?: () => JSX.Element
}

export function Tecnology({ title, ReactIcon, Icon }: TecnologyProps) {
  return (
    <div className='w-72 md:w-96 bg-slate-600 p-4 rounded-lg flex flex-col gap-5 transition-all hover:scale-110'>
      <div className='text-white flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          {ReactIcon && <ReactIcon
            size={36}
            color='#fff'
          />}
          {Icon && <Icon/>}
          <h4 className='text-lg'>{title}</h4>
        </div>
      </div>
    </div>
  )
}