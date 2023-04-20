import { IconType } from "react-icons";

export interface TecnologyProps {
  title: string;
  complete: number;
  ReactIcon?: IconType;
  Icon?: () => JSX.Element
}

// TODO: Remove teecnology % and % bar
export function Tecnology({ title, complete, ReactIcon, Icon }: TecnologyProps) {
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
        <p>{complete*100}%</p>
      </div>
      <div>
        <div className='w-full h-5 px-2 bg-slate-400 rounded-xl flex items-center'>
          <div
            className=' h-3 bg-emerald-500 rounded-xl'
            style={{
              width: `${complete*100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}