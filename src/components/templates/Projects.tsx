import { Footer } from '../organisms/Footer';
import { Header } from '../organisms/Header';
import { Project } from '../organisms/Project';

export function ProjectsTemplate() {
  return (
    <>
      <Header/>
      <main className='w-full h-[calc(90%-theme(space.10))] px-10 pb-4 overflow-y-auto flex flex-wrap justify-center items-center gap-10'>
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
            <Project
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
      </main>
      <Footer/>
    </>
  )
}