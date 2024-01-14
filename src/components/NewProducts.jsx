import React from 'react'
import { YangiMahsulot } from '../store/data'
import { Rating } from "@material-tailwind/react";
import ShoopingCard from "../../public/img/shopping-cart.svg"
import LikeIcon from "../../public/img/Like.svg"


const NewProducts = () => {
    const [rated, setRated] = React.useState(4);

    return (
        <section className='font-inter py-8'>
            <div className="container">
                <h2 className='text-3xl mb-6 font-bold'>Yangi kelgan mahsulotlar</h2>

                <ul className='grid-cols-4 grid gap-6 mb-6'>

                    {
                        YangiMahsulot.map((data) => {
                            return (
                                <li key={data.id} className='border-1 shadow-lg rounded-3xl pb-6'>
                                    <img src={data.img} width={296} height={292} className='rounded-3xl mb-4' alt={data.title} />

                                    <div className='px-6 space-y-2'>
                                        <h3 className='text-xl font-semibold'>{data.title}</h3>

                                        {/* Rate */}
                                        <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                                            <Rating value={4} onChange={(value) => setRated(value)} />
                                            {rated}.5
                                        </div>

                                        <p className='text-xl font-semibold'>$ {data.price}</p>

                                        <div className='flex justify-between items-center'>
                                            <button className='px-2.5 hover:opacity-85 rounded-2xl  py-2 bg-gradient-to-r from-cyan-300 to-blue-700 text-white   font-normal flex items-center'>
                                                <img src={ShoopingCard} width={20} height={20} className='mr-2 ' alt="Card img" />
                                                Xarid qilish
                                            </button>

                                            <button><img src={LikeIcon} width={24} height={24} alt="like icon" /></button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
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
    )
}

export default NewProducts