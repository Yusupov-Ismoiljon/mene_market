import React from 'react'
import { QulayliklarData } from '../store/data'

const Qulayliklar = () => {
  return (
    <div className='container'>

      <section className='py-8'>



        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8'>

          {
            QulayliklarData.map((data) => {
              return (
                <li key={data.id} className=' bg-white shadow-lg border rounded-3xl p-6 space-y-2 flex flex-col items-start justify-center '>
                  <div className=' rounded-2xl  p-3 bg-gradient-to-r from-cyan-300 to-blue-700 text-white '>
                    <img src={data.img} width={24} height={24} className='' alt={data.title} />
                  </div>

                  <h3 className='text-lg font-medium'>{data.title}</h3>

                  <p className='text-xs font-normal text-[#949494]'>{data.paragraf}</p>

                </li>
              )
            })
          }

        </ul>


      </section>

    </div>
  )
}

export default Qulayliklar