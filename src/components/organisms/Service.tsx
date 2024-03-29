import Image from 'next/image';

export interface ServiceProps {
  image: any;
  title: string;
  description: string;
}

export function Service({ image, title, description }: ServiceProps) {
  return (
    <div className='bg-slate-600 border-b-4 border-b-emerald-500 rounded-lg px-4 py-6 flex flex-col md:flex-row items-center gap-6 w-4/5 md:w-1/3'>
      <Image
        src={image}
        alt='Develop web'
        className='w-4/5 md:w-2/5'
      />
      <div>
        <h4 className='text-emerald-500 text-lg font-semibold'>{title}</h4>
        <br/>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  )
}
