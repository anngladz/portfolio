import { v4 as uuidv4 } from 'uuid';
import { AiFillGithub } from 'react-icons/ai';
import data from '../data.json';

function Projects() {
  return (
    <section
      id='projects'
      className='flex items-center justify-center py-32 text-neutral-900 bg-neutral-200'
    >
      <div className='relative px-6 md:px-0 md:w-8/12'>
        <h3 className='text-3xl font-medium  relative mb-10 text-center md:text-left'>
          <span className='text-emerald-400'>&#60;</span> Projects{' '}
          <span className='text-emerald-400'>&#62;</span>
        </h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
          {data.projects.map((project) => (
            <div
              key={uuidv4()}
              className='bg-neutral-100 shadow-lg rounded-md  flex flex-col'
            >
              <a href={project.live} target='_blank' rel='noreferrer'>
                <img
                  src={project.img}
                  alt='Project thumbnail'
                  className='w-full rounded-md grayscale hover:grayscale-0 duration-500'
                />
              </a>
              <div className='px-6'>
                <div className='flex items-center mt-6 mb-3'>
                  <h4 className=' text-neutral-900 font-medium text-xl'>
                    {project.title}
                  </h4>
                  <a
                    className='ml-auto'
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiFillGithub className=' h-7 w-7 text-neutral-600 hover:text-emerald-400 duration-500' />
                  </a>
                </div>
                <p className='text-neutral-600 mb-6'>{project.desc}</p>
              </div>
              <div className='px-6 mt-auto mb-6'>
                {project.techs.map((tech) => (
                  <span
                    key={uuidv4()}
                    className='inline-block bg-neutral-200 font-medium rounded-full px-3 py-1 mt-2 text-sm  text-neutral-900 mr-2 '
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
