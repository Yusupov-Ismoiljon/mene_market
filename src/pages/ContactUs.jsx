import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Qulayliklar from "../components/Qulayliklar"
import Map from "../../public/img/Map.png"

const ContactUs = () => {
  console.log(1);
  return (
    <>
      <div className='container pt-10'>
        <h2 className='text-4xl font-semibold mb-6 text-center'>Contact Us</h2>

        <ul className='grid grid-cols-3 gap-5 mb-12'>
          <li className='p-6 shadow-md flex justify-center bg-[#FAFAFA] flex-col items-center space-y-4'>
            <span className='text-2xl'>
              🏠
            </span>
            <h4 className='font-medium text-lg text-[#949494]'>Address</h4>
            <p>120, Chinobod, Andijon, O’zbekiston</p>
          </li>
          <li className='p-6 shadow-md flex justify-center bg-[#FAFAFA] flex-col items-center space-y-4'>
            <span className='text-2xl'>
              📞
            </span>
            <h4 className='font-medium text-lg text-[#949494]'>Phone</h4>
            <p>+998 99 874 56 78</p>
          </li>
          <li className='p-6 shadow-md flex justify-center bg-[#FAFAFA] flex-col items-center space-y-4'>
            <span className='text-2xl'>
              📧
            </span>
            <h4 className='font-medium text-lg text-[#949494]'>Email</h4>
            <p>hello@example.com</p>
          </li>
        </ul>


        <div className='grid grid-cols-2 items-center gap-6 pb-8'>

          {/* Form */}
          <form className='space-y-6' action="">
            <div>
              <label className='text-xs text-[#949494] mb-3 inline-block' htmlFor="name">Full Name</label>
              <input className='w-full border py-1 border-[#949494] px-4 rounded-md inline-block' id='name' type="text" placeholder='Your Name' />
            </div>

            <div>
              <label className='text-xs text-[#949494] mb-3 inline-block' htmlFor="email">Email Address</label>
              <input className='w-full border py-1 border-[#949494] px-4 rounded-md' type="text" id='email' placeholder='Your Email' />
            </div>

            <div>
              <label className='text-xs text-[#949494] mb-3 inline-block' htmlFor="message">Message</label>
              <textarea name="" id="message" className='w-full max-h-[140px] p-4 border border-[#949494] rounded-md ' placeholder='Your Message'></textarea>
            </div>

            <button className='bg-gradient-to-r from-cyan-300 to-blue-700 py-1.5 px-10 text-white rounded-lg font-medium'>Send Message</button>
          </form>

          {/* Map */}
          <img src={Map} width={608} height={404} alt="Map image" />

        </div>
      </div>

      <div className="pt-8">
        <div className='py-8 bg-[#fafafa]'>
        <Qulayliklar />
        </div>
      </div>
    </>

  )
}

export default ContactUs