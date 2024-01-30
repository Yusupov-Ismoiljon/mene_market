import React from 'react';
import logo from '../../public/img/icon.png'
import { Link } from 'react-router-dom';
import telegram from '../../public/img/telegram.svg'

const Footer = () => {
  return (
      <footer className='  pt-8'>
          <div className="bg-[#13181F]">
            <div className='w-full max-w-[1240px] px-5 mx-auto py-8'>
                  <div className='flex items-center justify-between  text-white'>
                    <div>
                        <img className='w-[152px] h-[83px] mb-4' src={logo} alt="logo" />
                        <p className='font-normal text-base'>Copyright 2023 © All rights reserved</p>
                    </div>
                    <nav>
                        <ul className='space-y-2'>
                            <li>
                                <Link to='/'>Mening profilim</Link>
                            </li>
                            <li>
                                <Link to='/'>Sozlamlar</Link>
                            </li>
                            <li>
                                <Link to='/'>Aloqa</Link>
                            </li>
                            <li>
                                <Link to='/'>Ommaviy offerta</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <p className='font-normal text-base mb-2'>Aloqa uchun:</p>
                        <a href="https://t.me/+O9MlXXfxUA84N2Ji" target="_blank">
                            <img className='w-6 h-6' src={telegram} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer