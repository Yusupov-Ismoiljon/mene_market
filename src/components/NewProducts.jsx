import React, { useState } from 'react'
import { Rating } from "@material-tailwind/react";
import ShoopingCard from "../../public/img/shopping-cart.svg"
import LikeIcon from "../../public/img/Like.svg";
import LikeColorIcon from "../../public/img/like-color.svg"


const NewProducts = ({ data }) => {
    const [rated, setRated] = React.useState(4);
    const [like, setLike] = useState(false);

    return (
        <li key={data.id} className='border-1 shadow-lg rounded-3xl'>
            <img src={data.img} height={292} className='w-full rounded-3xl' alt={data.title} />

            <div className='p-6 space-y-2'>
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

                    <button onClick={() => setLike(!like)}>
                        {like ?
                            <img src={LikeColorIcon} width={24} height={24} alt="like icon" />
                            :
                            <img src={LikeIcon} width={24} height={24} alt="like icon" />
                        }
                    </button>
                </div>
            </div>
        </li>
    )
}

export default NewProducts