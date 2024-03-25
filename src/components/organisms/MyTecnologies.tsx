import { Tecnology } from '../molecules/Tecnology';

export type Tecnology = {
  title: string;
  icon?: any;
  reactIcon?: any;
}

export interface MyTecnologiesProps {
  tecnologies: Tecnology[];
}

// TODO: Create Tecnology entity
export function MyTecnologies({ tecnologies }: MyTecnologiesProps) {
  return (
    <section>
      <h3 className='text-center text-white text-xl font-semibold'>Minhas Tecnologias</h3>
      <br/>
      <div className='flex flex-wrap gap-10 justify-center'>
        {tecnologies.map(tecnology => (
          <Tecnology
            key={tecnology.title}
            title={tecnology.title}
            Icon={tecnology.icon}
            ReactIcon={tecnology.reactIcon}
          />
        ))}
      </div>
    </section>
  )
}
