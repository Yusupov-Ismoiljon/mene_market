import { Link } from "react-router-dom"
import Logo from "../../public/img/icon.png"
import Search from "../../public/img/search.svg"
import Uz from "../../public/img/uzbekistan.png"
import Ru from "../../public/img/russia.png"
import Eng from "../../public/img/united-states.png"
import React from "react";
import profile from "../../public/img/profile-circle.svg"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Global from "../../public/img/global.svg"



const Header = ({ searchQuery, setSearchQuery }) => {


    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" className="flex items-center rounded-md p-1 shadow-md" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <img src={Uz} className="mr-2" width={24} alt="Uzbekistan icon" />
                    Uz
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" className="flex items-center rounded-md p-1 shadow-md" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <img src={Ru} className="mr-2" width={24} alt="Russia icon" />
                    Ru
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" className="flex items-center rounded-md p-1 shadow-md" rel="noopener noreferrer" href="https://www.antgroup.com">
                    <img src={Eng} className="mr-2" width={24} alt="English icon" />
                    Eng
                </a>
            ),
        },

    ];



    return (
        <header className="py-6 shadow-md sticky top-0 left-0 z-10 bg-white">
            <div className="container  ">
                <div className="flex justify-between items-center">

                    {/* Site Logo */}
                    <Link to='/' className="hover:opacity-75">
                        <img width={96} height={48} src={Logo} alt="Site Logo" />
                    </Link>

                    {/* Search input */}
                    <div className='relative max-w-[360px]'>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="rounded-3xl w-full border-black px-6 py-2 border" type="search" placeholder="Search..." />
                        <img className='absolute right-3 top-2 pl-1 bg-white' src={Search} alt="Search icon" />

                    </div>

                    <div className=" flex items-center  space-x-3">

                        <Link to='contact' className="hover:bg-blue-500 rounded-md px-2 py-1 duration-300 hover:text-white">
                            Aloqa
                        </Link>

                        {/* Select language */}
                        <Dropdown
                            menu={{
                                items,
                            }}
                            className="flex items-center"
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <img width={25} src={Global} alt="Global icon" />
                                    Uz
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>

                            
                        <div className="px-2 py-1 hover:bg-blue-500 rounded-md duration-300 hover:text-white">
                            <Link to='login' className=" items-center  flex">
                                <img src={profile} className="text-white mr-1" alt="Global icon" />
                                <p className="font-medium inline-block">Kirish</p>
                            </Link>
                        </div>

                </div>

                </div>
                </div>
        </header>
    )
}

export default Header