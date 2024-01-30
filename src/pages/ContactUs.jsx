import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Qulayliklar from "../components/Qulayliklar"

const ContactUs = () => {
  console.log(1);
  return (
    <>
        <Header />
      <div className='container pt-10'>
        <h2 className='text-4xl font-semibold mb-6 text-center'>Contact Us</h2>

        <ul className='grid grid-cols-3 gap-5'>
          <li className='p-6 shadow-md flex justify-center text-red-500'>
            🏠
          </li>
          <li className='p-6 shadow-md flex justify-center'>
            📞
          </li>
          <li className='p-6 shadow-md flex justify-center'>
            📧
          </li>
        </ul>
      </div>
      <Qulayliklar />
      <Footer />
    </>
   
  )
}

export default ContactUs