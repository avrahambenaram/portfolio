import { Service } from '../organisms/Service';

import developMobile from '../../../public/develop-mobile.svg';
import developWeb from '../../../public/develop-web.svg';
import developApi from '../../../public/develop-api.svg';

export function MyServices() {
  const serviceDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare. Pellentesque at scelerisque odio, et sodales lacus. Sed interdum dolor in odio blandit, a porttitor ex accumsan.';
  return (
    <section className='w-full'>
      <h3 className='text-center text-white text-xl font-semibold'>Meus serviços</h3>
      <br/>
      <div className='w-full md:px-5 flex flex-wrap gap-10 justify-center items-center'>
          <Service
            title='Desenvolvimento mobile'
            description={serviceDescription}
            image={developMobile}
          />
          <Service
            title='Desenvolvimento web'
            description={serviceDescription}
            image={developWeb}
          />
          <Service
            title='API Rest'
            description={serviceDescription}
            image={developApi}
          />
      </div>
    </section>
  )
}
