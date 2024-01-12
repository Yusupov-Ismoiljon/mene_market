
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Login = ({ signup, setSignup }) => {
    return (
        < >
            <div className="bg-star-bg bg-fixed bg-center  ">
                <div className='flex justify-center items-center '>
                    <div className='w-[450px] border-[#0B0B0B] rounded-lg show py-6 px-7'>
                        <Card className='flex text-center' color="transparent" shadow={false}>
                            <h2 className='font-bold text-2xl leading-8 text-[#aaa]'>
                                Ruxsat
                            </h2>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-4">
                                    <Input className='block' size="lg" type='email' label="Pochta" required />
                                    <Input className='block' type="password" size="lg" label="Parol" required />
                                </div>
                                <Button type='submit' className="mt-7 bg-[#3b8cdc]" fullWidth>
                                    Kirish
                                </Button>
                                <Typography color="gray" className="mt-4 text-center space-x-5 font-normal">
                                    <span>
                                        Hali hisobingiz yo`qmi ?
                                    </span>
                                    <Link to={'/signup'} className="font-medium logo ml-2">
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