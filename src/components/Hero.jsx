import React from 'react';
import arrow from '../../public/img/arrow-right.svg';
import aksayaimg from '../../public/img/aksiya-img.png'
import aksiyaiPhone from '../../public/img/aksiya-iphone-img.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
    return (
        <div className='w-full max-w-[1240px] px-5 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='w-full'>
                    <div className="w-full flex justify-between items-center text-white bg-[#0CD691] p-6">
                        <div className='w-[386px] flex flex-col items-center'>
                            <h2 className='font-bold text-3xl leading-normal mb-2'>Bayram oldi aksiyamizda <br />ishtirok eting</h2>
                            <span className='font-medium text-lg block mb-6'>90% gacha chegirma </span>
                            <button className='flex items-center gap-2 bg-black rounded-[62px] px-6 py-4'>Harid qilish<img className='max-w-[24px] h-6' src={arrow} alt="" /></button>
                        </div>
                        <div>
                            <img className='max-w-[459px] h-[172px]' src={aksayaimg} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full'>
                    <div className="w-full flex justify-between items-center text-white bg-[#0CD691] p-6">
                        <div className='w-[412px] flex flex-col items-center'>
                            <h2 className='font-bold text-3xl leading-normal mb-2'>Barcha rangdagi iPhonelar aksyada</h2>
                            <span className='font-medium text-lg block mb-6'>25% gacha chegirma </span>
                            <button className='flex items-center gap-2 bg-black rounded-[62px] px-6 py-4'>Harid qilish<img className='max-w-[24px] h-6' src={arrow} alt="" /></button>
                        </div>
                        <div>
                            <img className='max-w-[459px] h-[172px]' src={aksiyaiPhone} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero