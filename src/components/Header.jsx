import { Link } from "react-router-dom"
import Logo from "../../public/img/icon.png"
import Search from "../../public/img/search.svg"
import Uz from "../../public/img/uzbekistan.png"
import Ru from "../../public/img/russia.png"
import Eng from "../../public/img/united-states.png"
import React from "react";
import { Select, Option } from "@material-tailwind/react";
import Global from "../../public/img/global.svg"



const Header = () => {

    const countries = [
        {
            name: 'Uzb',
            Img: Uz
        },
        {
            name: 'Ru',
            Img: Ru
        },
        {
            name: 'Eng',
            Img: Eng
        },
    ]

    return (
        <header className="py-6 shadow-md">
            <div className="container  max-w-[1249px] w-full px-5 mx-auto flex justify-between items-center">

                {/* Site Logo */}
                <Link to='/' className="hover:opacity-75">
                    <img width={96} height={48} src={Logo} alt="Site Logo" />
                </Link>

                {/* Search input */}
                <div className='relative max-w-[360px]'>
                    <input className="rounded-3xl w-full border-black px-6 py-2 border" type="search" placeholder="Search..." />
                    <img className='absolute right-3 top-2 pl-1 bg-white'  src={Search} alt="Search icon" />
                </div>

                <div className="space-x-6 flex items-center justify-between">
                    <a href="https://t.me/+O9MlXXfxUA84N2Ji" className="hover:bg-blue-500 rounded-md px-2 py-1 duration-300 hover:text-white">
                        Aloqa
                    </a>
                    <Select
                        size="lg"
                        label="Select Language"
                        selected={(element) =>
                            element &&
                            React.cloneElement(element, {
                                disabled: true,
                                className:
                                    "flex items-center opacity-100 px-0 gap-2 pointer-events-none border-none",
                            })
                        }
                    >
                        {countries.map(({ name, Img }) => (
                            <Option key={name} value={name} className="flex items-center gap-2 shadow-sm">
                                <img
                                    src={Img}
                                    alt={name}
                                    className="h-5 w-5 rounded-full object-cover"
                                />
                                {name}
                            </Option>
                        ))}
                    </Select>

                    {/* LogIn & SignUp */}
                    <Link to='/' className="flex items-center">
                        <img src={Global} className="mr-1" alt="Global icon" />
                        <p className="font-medium">Kirish</p>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header