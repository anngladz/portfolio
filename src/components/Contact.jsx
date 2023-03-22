import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineCheckCircle, AiOutlineCloseSquare } from 'react-icons/ai';

function Contact() {
  const [alertOk, setAlertOk] = useState('hidden');
  const [alertError, setAlertError] = useState('hidden');

  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertOk('flex');
          setTimeout(() => {
            setAlertOk('hidden');
          }, '4000');
        },
        (error) => {
          console.log(error.text);
          setAlertError('flex');
          setTimeout(() => {
            setAlertError('hidden');
          }, '4000');
        }
      );
    e.target.reset();
  };

  return (
    <section
      id='contact'
      className='bg-hero flex py-32 justify-center text-neutral-900'
    >
      <div className='w-full px-6 md:w-8/12 md:px-0'>
        <h3 className='text-3xl font-medium  relative mb-10 text-center md:text-left'>
          <span className='text-emerald-400'>&#60;</span> Contact{' '}
          <span className='text-emerald-400'>&#62;</span>
        </h3>

        <div
          className={`${alertOk} justify-center items-center rounded-md mb-2 py-2 bg-emerald-400 text-neutral-900 font-medium`}
        >
          <AiOutlineCheckCircle className='w-6 h-6 mr-2' />
          <p>Message Sent Successfully!</p>
        </div>
        <div
          className={`${alertError} justify-center items-center rounded-md mb-2 py-2 bg-red-400 text-neutral-900 font-medium`}
        >
          <AiOutlineCloseSquare className='w-6 h-6 mr-2' />
          <p>Something Went Wrong!</p>
        </div>

        <form
          ref={form}
          onSubmit={handleOnSubmit}
          className='bg-neutral-50 p-4 md:p-10 rounded-md shadow-lg flex flex-col text-neutral-600'
        >
          <label htmlFor='user_name' className='font-medium '>
            Name
          </label>
          <input
            className='w-full mb-10 mt-2 p-4 rounded-md outline-none'
            id='user_name'
            name='user_name'
            type='text'
            placeholder='Enter Your Name'
            minLength='3'
            maxLength='48'
            required
          ></input>
          <label htmlFor='user_email' className='font-medium '>
            Email
          </label>
          <input
            className='w-full mb-10 mt-2 p-4 rounded-md outline-none'
            id='user_email'
            name='user_email'
            type='email'
            placeholder='Enter Your Email'
            minLength='10'
            maxLength='48'
            required
          ></input>
          <label htmlFor='meassage' className='font-medium'>
            Message
          </label>
          <textarea
            className='w-full mb-10 mt-2 p-4 rounded-md outline-none resize-none'
            rows='8'
            id='message'
            name='message'
            placeholder='Enter Your Message'
            minLength='24'
            maxLength='480'
            required
          ></textarea>
          <button
            className='bg-neutral-900 font-medium uppercase text-neutral-100 inline-block px-6 py-4 rounded-md md:ml-auto duration-500 hover:bg-neutral-600'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
