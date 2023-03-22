import { TbCode, TbArrowNarrowDown } from 'react-icons/tb';

function Projects() {
  return (
    <section
      id='hero'
      className='flex flex-col items-center justify-center bg-hero h-screen pt-24 px-10'
    >
      <div>
        <div className='relative bg-neutral-900 h-0.5 mb-14'>
          <div className='bg-neutral-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full'></div>
          <TbCode className='text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-2xl' />
        </div>
        <div className='px-0 md:px-24 uppercase'>
          <p className='text-xl md:text-2xl text-neutral-500'>Hello, I'm</p>
          <h2 className='text-4xl md:text-6xl font-medium text-neutral-800 my-5'>
            Anna Gladzińska
          </h2>
          <p className='text-xl md:text-2xl text-neutral-500'>
            An aspiring Front-end Developer
          </p>
        </div>
        <div className='relative bg-neutral-900 w-full h-0.5 mt-14'> </div>
      </div>
      <a href='#about'>
        <button className='bg-emerald-400 px-3 py-2 mt-12 rounded-full'>
          <TbArrowNarrowDown className='text-3xl mt-2 animate-bounce' />
        </button>
      </a>
    </section>
  );
}

export default Projects;
