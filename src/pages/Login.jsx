
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        < >
            <div className="bg-star-bg bg-fixed bg-center text-white">
                <div className='flex justify-center items-center '>
                    <div className='w-[450px] border-[#fff] rounded-lg show py-6 px-7'>
                        <Card className='flex text-center' color="transparent" shadow={false}>
                            <h2 className='font-bold text-2xl leading-8 text-[#fff]'>
                                Ruxsat
                            </h2>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="flex flex-col gap-4 mb-4">
                                    <Input className='block text-white' size="lg" type='email' label="Pochta" required />
                                    <Input className='block text-white' type="password" size="lg" label="Parol" required />
                                </div>
                                <Button type='submit' className="mt-7 bg-[#3b8cdc]" fullWidth>
                                    Kirish
                                </Button>
                                <Typography color="gray" className="mt-4 text-center space-x-5 font-normal text-white">
                                    <span>
                                        Hali hisobingiz yo`qmi ?
                                    </span>
                                    <Link to={'/signup'} className="font-medium ml-2">
                                        Roʻyxatdan oʻtish
                                    </Link>
                                </Typography>
                            </form>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;