
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import img from '../../assets/signUpImgs/signUpImg.png'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const [eye , setEye] = useState(false) ;

    return (
        <div className="min-h-[70vh] grid grid-cols-5 w-full">
            
            <div className="col-span-3 flex flex-col items-center justify-center w-full h-screen">
                <div className="bg-[#FAFAFA] p-6 rounded-lg flex flex-col items-center justify-center gap-5 w-[500px]">

                    <div className="flex flex-col w-full mb-5 bar">
                        <h1 className="gro text-2xl font-semibold">Welcome Back</h1>
                        <p className="font-medium text-lg">Enter your Credentials to access your account</p>
                    </div>

                    <form className='flex flex-col items-start gap-4 w-full'>

                        <Input name='email' label='Email Address'/>
                        <div className="relative w-full">
                            {eye ? (
                            <IoMdEyeOff
                                onClick={() => setEye(!eye)}
                                className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                            />
                            ) : (
                            <IoMdEye
                                onClick={() => setEye(!eye)}
                                className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                            />
                            )}
                            <Input
                            className="z-0"
                            type={eye ? "text" : "password"}
                            name="password"
                            label="Password"
                            size="lg"
                            required
                            />
                        </div>
                        <Checkbox
                            label={
                                <Typography className="flex font-medium">
                                I agree with the&nbsp;
                                <Typography
                                    as="a"
                                    href="#"
                                    className="underline"
                                >
                                    terms and conditions
                                </Typography>
                                .
                                </Typography>
                            }
                        />

                        <input type="submit" value={"SignUp"} className='btn bg-black text-white gro hover:text-black hover:bg-transparent w-full'/>
                            
                    </form>

                    <div className="divider border-black">Or</div>

                    <div className="grid grid-cols-2 w-full gap-3">
                        <Button className='w-full flex items-center justify-center gap-3 capitalize gro text-base btn bg-transparent text-black hover:bg-black hover:text-white'><FcGoogle className='text-xl' /> Google</Button>
                        <Button className='w-full flex items-center justify-center gap-3 capitalize gro text-base btn bg-transparent text-black hover:bg-black hover:text-white'><IoLogoApple className='text-xl' />Apple</Button>
                    </div>
                    <p className="gro font-semibold text-lg">Dont have an account ? <Link to={'/signUp'} className='text-[#0F3DDE]'>SignUp</Link></p>

                </div>
            </div>
            
            <div className="col-span-2 h-screen w-full">
                <img src={img} className='h-screen w-full' alt="" />
            </div>

        </div>
    );
};

export default Login;
