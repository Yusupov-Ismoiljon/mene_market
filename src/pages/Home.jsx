import React from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Kategoriyalar from '../components/Kategoriyalar';
import NewProducts from '../components/NewProducts';
import PopularProducts from '../components/PopularProducts';
import Qulayliklar from '../components/Qulayliklar';
import { OmmabobMahsulot, YangiMahsulot } from '../store/data';

const Home = ({ searchQuery, setSearchQuery }) => {
    return (
        <>
            <Hero />
            <Kategoriyalar />

            <section className='py-8'>
                <div className='container'>
                    <h2 className='text-3xl mb-6 font-bold'>Yangi kelgan mahsulotlar</h2>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6'>
                        {
                            YangiMahsulot.map((data) => (
                                <NewProducts key={data.id} data={data} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                            ))
                        }
                    </ul>
                    <div className='pb-6'>
                        <button className='px-6 py-3  rounded-[62px] border  border-black text-lg font-medium flex items-center'>
                            Hammasini ko'rish
                            <span className='text-2xl ml-2 h-8'>→</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className='py-8'>
                <div className='container'>
                    <h2 className='text-3xl mb-6 font-bold'>Ommabob mahsulotlar</h2>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6'>
                        {
                            OmmabobMahsulot.map((data) => (
                                <PopularProducts key={data.id} data={data} />
                            ))
                        }
                    </ul>
                    <div className='pb-6'>
                        <button className='px-6 py-3  rounded-[62px] border  border-black text-lg font-medium flex items-center'>
                            Hammasini ko'rish
                            <span className='text-2xl ml-2 h-8'>→</span>
                        </button>
                    </div>
                </div>
            </section>

            <Qulayliklar />

            <Footer />
        </>
    )
}

export default Home;