import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_92jxzh1', 'template_5qvylbc', form.current, {
        publicKey: 'iy5B0nYnhyEKqUsmJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-lg mt-10 text-black mb-10 mx-auto p-6 bg-slate-700 shadow-md rounded-lg">
      {/* Grid for two inputs in one row */}
      <div className="grid grid-cols-1 bg-re sm:grid-cols-2 gap-4 mb-4">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            <AiOutlineUser className="inline-block mr-2" /> Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            <AiOutlineMail className="inline-block mr-2" /> Email
          </label>
          <input
            type="email"
            name="from_email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          <AiOutlineMessage className="inline-block mr-2" /> Message
        </label>
        <textarea
          name="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <input
          type="submit"
          value="Send"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        />
      </div>
    </form>
  );
};

export default Contact;
