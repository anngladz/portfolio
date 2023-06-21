import { useState } from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

function Header() {
  const [menuHidden, setMenuHidden] = useState('hidden');
  const [menuShow, setMenuShow] = useState('block');

  const changeMenu = () => {
    if (menuHidden === 'hidden') {
      setMenuHidden('block');
      setMenuShow('hidden');
    }
    if (menuHidden === 'block') {
      setMenuHidden('hidden');
      setMenuShow('black');
    }
  };

  return (
    <>
      <header className='flex justify-center fixed bg-neutral-900 h-24 font-medium w-screen shadow-lg z-20'>
        <div className='flex items-center w-9/12'>
          <a href='/'>
            <h1 className='flex text-2xl uppercase text-neutral-100'>
              <span className='text-emerald-400'>&#60;</span>
              Anna G<span className='animate-flash'>&#124;</span>
              <span className='text-emerald-400'>&#47;&#62;</span>
            </h1>
          </a>

          <AiOutlineMenu
            className={`text-neutral-100 ml-auto w-8 h-8 ${menuShow} md:hidden`}
            onClick={changeMenu}
          />
          <AiOutlineClose
            className={`text-neutral-100 ml-auto w-8 h-8 ${menuHidden}`}
            onClick={changeMenu}
          />

          <nav className='hidden md:block ml-auto uppercase text-neutral-100'>
            <ul className='flex items-center'>
              <li className='pr-10 hover:text-emerald-400 duration-500'>
                <a href='#about'>About</a>
              </li>
              <li className='pr-10 hover:text-emerald-400 duration-500'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='pr-10 hover:text-emerald-400 duration-500'>
                <a href='#contact'>Contact</a>
              </li>
              <li className='pr-4'>
                <a
                  href='https://github.com/anngladz'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillGithub className='h-9 w-9 hover:text-emerald-400 duration-500' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/anna-gladzinska/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillLinkedin className='h-9 w-9 hover:text-emerald-400 duration-500' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav
        className={`h-screen w-screen pt-24 fixed z-10 bg-neutral-900 uppercase font-medium ${menuHidden}`}
        onClick={() => {
          setMenuHidden('hidden');
          setMenuShow('block');
        }}
      >
        <ul className='flex flex-col items-center mt-10  text-neutral-100'>
          <li className='pb-10 hover:text-emerald-400 duration-500'>
            <a href='#about'>About</a>
          </li>
          <li className='pb-10 hover:text-emerald-400 duration-500'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='pb-10 hover:text-emerald-400 duration-500'>
            <a href='#contact'>Contact</a>
          </li>
          <li className='pb-10'>
            <a
              href='https://github.com/anngladz'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub className='h-9 w-9 hover:text-emerald-400 duration-500' />
            </a>
          </li>
          <li>
            <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
              <AiFillLinkedin className='h-9 w-9 hover:text-emerald-400 duration-500' />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
