import React, { useState } from 'react'
import { YangiMahsulot } from '../store/data'
import { useParams } from 'react-router'
import { Rating } from "@material-tailwind/react";
import LikeIcon from "../../public/img/Like.svg";
import LikeColorIcon from "../../public/img/like-color.svg"

const CardDataNew = () => {
  const [rated, setRated] = React.useState(4);
  const [like, setLike] = useState(false);


  const { id } = useParams()

  const data = YangiMahsulot.find(e => e.id === parseInt(id))

  return (
    <div className="container">
      <div className='grid grid-cols-2 justify-between gap-6 py-12'>

        <div className='flex '>
          <ul className='mr-2.5 flex flex-col justify-between  space-y-2'>
            <li className='max-w-[116px] border max-h-[154px] w-full h-full'>
              <img className='w-full h-full' src={data.img} alt={data.title} />
            </li>
            <li className='max-w-[116px] border max-h-[154px] w-full h-full'>
              <img className='w-full h-full' src={data.img} alt={data.title} />
            </li>
            <li className='max-w-[116px] border max-h-[154px] w-full h-full'>
              <img className='w-full h-full' src={data.img} alt={data.title} />
            </li>
            <li className='max-w-[116px] border max-h-[154px] w-full h-full'>
              <img className='w-full h-full' src={data.img} alt={data.title} />
            </li>
          </ul>

          <div className='max-w-[483px] max-h-[644px] w-full h-full'>
            <img className='w-full h-full border' src={data.img} alt={data.title} />
          </div>
        </div>

        <div>

          {/* Rating */}
          <div className='flex justify-between mb-2'>
            <p>204 ta buyurtma</p>

            <div className="flex items-center gap-2 font-bold text-blue-gray-500">
              <Rating />
            </div>

            <button onClick={() => setLike(!like)}>
              {like ?
                <img src={LikeColorIcon} width={24} height={24} alt="like icon" />
                :
                <img src={LikeIcon} width={24} height={24} alt="like icon" />
              }
            </button>
          </div>

          <h2 className='text-3xl font-semibold'>{data.title}</h2>

          {/* Miqdori */}
          <div className=''>
            <h3>Miqdori:</h3>
            <div className="flex justify-start">
              <div className='rounded-2xl flex justify-start p-2 space-x-4 border border-black'>
                <button className='border border-black rounded-sm px-1 [padding-top: -5px ;]'>-</button>
                <span className='font-bold'>1</span>
                <button className=' '>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDataNew