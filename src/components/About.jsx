import { v4 as uuidv4 } from 'uuid';
import { FaChevronCircleRight } from 'react-icons/fa';
import data from '../data.json';

function About() {
  return (
    <section
      id='about'
      className='flex items-center justify-center  text-neutral-900 py-32 lg:h-screen'
    >
      <div className='relative px-6 md:px-0 md:w-8/12'>
        <h3 className='text-3xl font-medium  relative mb-10 text-center md:text-left'>
          <span className='text-emerald-400'>&#60;</span> About Me{' '}
          <span className='text-emerald-400'>&#62;</span>
        </h3>

        <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center'>
          <div className='lg:order-last'>
            <div className='relative after:absolute after:-z-10 after:rounded-md after:bg-emerald-400 after:w-full after:h-full after:block after:top-2 after:left-2 md:after:top-5 md:after:left-5'>
              <img
                src='/portfolio/img/me.jpg'
                alt='Portrait'
                className='w-40 md:w-60 lg:w-80 rounded-md grayscale'
              />
            </div>
          </div>
          <div>
            <p className='text-neutral-600 mt-10 lg:mt-0 whitespace-pre-wrap'>
              {data.bio}
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 mt-2'>
              {data.skills.map((skill) => (
                <span
                  key={uuidv4()}
                  className='flex items-center mt-2 text-sm text-neutral-900 mr-2'
                >
                  <FaChevronCircleRight className='text-emerald-400 mr-1 w-3 h-3' />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
