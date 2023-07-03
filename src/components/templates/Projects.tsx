import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { ProjectCard } from '../organisms/ProjectCard';

export function ProjectsTemplate() {
  return (
    <>
      <Header/>
      <main className='w-full h-[calc(90%-theme(space.10))] px-10'>
        <form
          className='h-1/10 flex items-center gap-2'
          role='search'
        >
          <input
            name='q'
            placeholder='Pesquisar'
            className='rounded px-2 py-1'
          />
          <button className='px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-600 transition-all flex justify-center items-center'>
            <span className='text-white'>Filtrar</span>
          </button>
        </form>
        <div className='overflow-y-auto h-9/10 py-10 flex flex-wrap justify-center items-center gap-10 flex-1'>
          {Array.from(new Array(50)).map((_, index) => {
            let external = '';
            let github = '';

            if (index % 2 === 0) {
              external = 'external_project_link';
            }
            if (index % 3 === 0) {
              github = 'project_repository'
            }
            return (
              <ProjectCard
                key={index.toString()}
                project={{
                  id: 'any_project_id',
                  name: 'NLW Habits',
                  previewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate turpis venenatis mi vulputate ornare.',
                  external,
                  github,
                }}
              />
            )
          })}
        </div>
      </main>
      <Footer/>
    </>
  )
}