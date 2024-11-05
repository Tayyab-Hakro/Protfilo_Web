import { useRef } from 'react';
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
        }
      );
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mt-10 mb-10 mx-auto p-8 bg-slate-800 text-white shadow-lg rounded-lg transition duration-200 hover:shadow-xl"
      >
        {/* Grid for two inputs in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="name">
              <AiOutlineUser className="inline-block mr-2" /> Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-700 text-white"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="email">
              <AiOutlineMail className="inline-block mr-2" /> Email
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-700 text-white"
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="mb-6">
          <label className="block text-gray-200 text-sm font-semibold mb-2" htmlFor="message">
            <AiOutlineMessage className="inline-block mr-2" /> Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message"
            className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-700 text-white h-40"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Send"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200 transform hover:scale-105"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
