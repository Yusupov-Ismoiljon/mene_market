import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import logo from '../../public/img/icon.png'


const Signup = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-star-bg bg-fixed bg-cover bg-center text-white">
                <Link className="w-[140px] h-60px]" to={'/'}>
                    <img src={logo} alt="" />
                </Link>
                <div className='flex justify-center items-center '>
                    <div className='w-[450px] border-[#0B0B0B] rounded-lg show py-6 px-7'>
                        <Card className='flex text-center' color="transparent" shadow={false}>
                            <h2 className='font-bold text-2xl leading-8 text-[#aaa]'>
                                Ro‘yxatdan o‘tish
                            </h2>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-4">
                                    <Input className='block text-white' size="lg" label="Ism" required />
                                    <Input className='block text-white' size="lg" label="Familya" required />
                                    <Input className='block text-white' size="lg" type='number' label="Теlefon" required />
                                    <Input className='block text-white' size="lg" type='email' label="Pochta" required />
                                    <Input className='block text-white' type="password" size="lg" label="Parol" required />
                                </div>
                                <Button type='submit' className="mt-7 bg-[#3b8cdc]" fullWidth>
                                    Ro`yhatdan o`tish
                                </Button>
                                <Typography className="text-white mt-4 text-center space-x-5 font-normal">
                                    <span>
                                        Allaqachon hisobingiz bormi ?
                                    </span>
                                    <Link to={'/login'} className="font-medium logo ml-2">
                                        Kirish
                                    </Link>
                                </Typography>
                            </form>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Signup;