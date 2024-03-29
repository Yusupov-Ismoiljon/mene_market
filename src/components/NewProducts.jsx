import React, { useState } from 'react'
import { Rating } from "@material-tailwind/react";
import ShoopingCard from "../../public/img/shopping-cart.svg"
import LikeIcon from "../../public/img/Like.svg";
import LikeColorIcon from "../../public/img/like-color.svg"
import { YangiMahsulot } from '../store/data';
import { Link } from 'react-router-dom';



const NewProducts = ({ data, searchQuery, }) => {
    const [rated, setRated] = React.useState(4);
    const [like, setLike] = useState(false);
    const isMalumotYoq = !data.title.toLowerCase().includes(searchQuery.toLowerCase());
    return (
        <li key={data.id} className={`${isMalumotYoq ? 'hidden' : 'block'} border-1 shadow-lg rounded-3xl`}>
            <img src={data.img} height={242} className='w-full rounded-3xl' alt={data.title} />

            <div className='p-6 space-y-2'>
                <h3 className='text-xl font-semibold'>{data.title}</h3>

                {/* Rate */}
                <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                    <Rating value={4} onChange={(value) => setRated(value)} />
                    {rated}.5
                </div>

                <p className='text-xl font-semibold'>$ {data.price}</p>

                <div className='flex justify-between items-center'>
                    <Link to={`/newproduct/${data.id}`} className='flex items-center font-normal hover:opacity-85 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-700 text-white duration-300 px-2.5 py-2'>
                        <img src={ShoopingCard} width={20} height={20} className='mr-2 ' alt="Card img" />
                        Xarid qilish
                    </Link>

                    <button onClick={() => setLike(!like)}>
                        {like ?
                            <img src={LikeColorIcon} width={24} height={24} alt="like icon" />
                            :
                            <img src={LikeIcon} width={24} height={24} alt="like icon" />
                        }
                    </button>
                </div>
            </div>
            {searchQuery.length > 0 && YangiMahsulot.every(data => !data.title.toLowerCase().includes(searchQuery.toLowerCase())) && (
                <h2 className='flex justify-center items-center font-bold md:text-4xl text-2xl pb-10 text-red-500'>Men </h2>
            )}
        </li>
    )
}

export default NewProducts