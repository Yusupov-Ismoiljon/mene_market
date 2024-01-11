import React from 'react';
import Elektronika from '../../public/img/Elektronika.png';
import Salomatlik from '../../public/img/Salomatlik.png';
import Parfyumeriya from '../../public/img/Parfyumeriya.png';
import MaishiyTexnika from '../../public/img/Maishiy-texnika.png';
import Telefonlar from '../../public/img/Telefonlar.png';
import Kompyuterlar from '../../public/img/Kompyuterlar.png';
import Mashinalar from '../../public/img/Mashinalar.png'
import BolalarUchun from '../../public/img/Bolalar-uchun.png';
import Kitoblar from '../../public/img/Kitoblar.png';
import Sovgalar from '../../public/img/Sovgalar.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const Kategoriyalar = () => {
  return (
    <div className='w-full max-w-[1240px] px-5 mx-auto pt-11 pb-11'>
      <h2 className='font-bold text-3xl leading-normal'>Kategoriyalar</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1240: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper py-6"
      >
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#8DB8E2] rounded-full p-4 mb-2'>
              <img className='bg-blue-300 rounded-full py-4' src={Elektronika} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Elektronika</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#FAAEAD] rounded-full p-4 mb-2'>
              <img className='bg-red-400 rounded-full py-4' src={Salomatlik} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Salomatlik</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#F4E094] rounded-full p-4 mb-2'>
              <img className='bg-yellow-400 rounded-full' src={Parfyumeriya} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Parfyumeriya</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#C1F4AF] rounded-full p-4 mb-2'>
              <img className='bg-green-300 rounded-full p-2' src={MaishiyTexnika} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Maishiy texnika</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#C5BEEE] rounded-full p-4 mb-2'>
              <img className='bg-purple-400 rounded-full p-2' src={Telefonlar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Telefonlar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#8DB8E2] rounded-full p-4 mb-2'>
              <img className='bg-blue-300 rounded-full p-2' src={Kompyuterlar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Kompyuterlar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#FAAEAD] rounded-full p-4 mb-2'>
              <img className='bg-red-400 rounded-full p-2' src={Mashinalar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Mashinalar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#F4E094] rounded-full p-4 mb-2'>
              <img className='bg-yellow-400 rounded-full p-2' src={BolalarUchun} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Bolalar uchun</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#F4E094] rounded-full p-4 mb-2'>
              <img className='bg-yellow-400 rounded-full p-2' src={Parfyumeriya} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Parfyumeriya</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#C1F4AF] rounded-full p-4 mb-2'>
              <img className='bg-green-300 rounded-full p-2' src={MaishiyTexnika} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Maishiy texnika</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#C5BEEE] rounded-full p-4 mb-2'>
              <img className='bg-[#A095E4] rounded-full p-2' src={Telefonlar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Telefonlar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px]  bg-[#BED6EF] rounded-full p-4 mb-2'>
              <img className='bg-[#8DB8E2] rounded-full p-2' src={Kompyuterlar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Kompyuterlar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#FAAEAD;] rounded-full p-4 mb-2'>
              <img className='bg-[#F56666] rounded-full p-2' src={Mashinalar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Mashinalar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#F4E094] rounded-full p-4 mb-2'>
              <img className='bg-[#EFCC4E] rounded-full p-2' src={BolalarUchun} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Bolalar uchun</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#C1F4AF] rounded-full p-4 mb-2'>
              <img className='bg-[#C1F4AF] rounded-full' src={Kitoblar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Kitoblar</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='w-[120px] h-[120px] bg-[#C5BEEE] rounded-full p-4 mb-2'>
              <img className='bg-[#A095E4] rounded-full p-2' src={Sovgalar} alt="" />
            </div>
            <span className='font-medium text-base leading-normal'>Sovg'alar</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Kategoriyalar