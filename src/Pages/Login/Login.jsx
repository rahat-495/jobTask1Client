
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import img from '../../assets/signUpImgs/signUpImg.png'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {toast, ToastContainer} from 'react-toastify';
import axios from 'axios';

const Login = () => {
    
    const {googleLogin , user} = useAuth() ;
    const navigate = useNavigate() ;
    const [eye , setEye] = useState(false) ;
    const [rememver , setRememver] = useState(false) ;
    const [errorText , setErrorText] = useState('') ;
    const {login} = useAuth() ;

    const handleSubmit = async (e) => {
        e.preventDefault() ;

        const form = e.target ;
        const email = form.email.value ;
        const pass = form.password.value ;
        if(rememver){
            const data = await login(email , pass) ;
            console.log(data)
        }
        else{
            setErrorText("Please Accept Our Terms & Conditions")
        }
    }

    if(user){
        navigate('/')
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then((res) => {
            toast.success('Login Success Fully !') ;

            axios.put('http://localhost:5555/userFromGoogle' , {email : res?.user?.email , name : res?.user?.displayName , islogin : true})
            .then((res) => {
                console.log(res.data)
            })

            setTimeout(() => {
                if(location.state){
                  navigate(location.state) ;
                }
                else{
                  navigate('/') ;
                }
            }, 1000);
        })
    }

    return (
        <div className="min-h-[70vh] grid grid-cols-5 w-full">
            
            <div className="col-span-3 flex flex-col items-center justify-center w-full h-screen">
                <div className="bg-[#FAFAFA] p-6 rounded-lg flex flex-col items-center justify-center gap-5 w-[500px]">

                    <div className="flex flex-col w-full mb-5 bar">
                        <h1 className="gro text-2xl font-semibold">Welcome Back</h1>
                        <p className="font-medium text-lg">Enter your Credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col items-start gap-4 w-full'>

                        <Input name='email' label='Email Address' required/>
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
                            onClick={() => setRememver(!rememver)}
                            label={
                                <Typography className="flex font-medium">
                                I agree with the&nbsp;
                                <Typography
                                    className="underline"
                                >
                                    terms and conditions
                                </Typography>
                                .
                                </Typography>
                            }
                        />

                        <div>
                            {rememver ? (
                                <p></p>
                            ) : (
                                <p className="text-red-800 font-semibold">{errorText}</p>
                            )}
                        </div>

                        <input type="submit" value={"SignUp"} className='btn bg-black text-white gro hover:text-black hover:bg-transparent w-full'/>
                            
                    </form>

                    <div className="divider border-black">Or</div>

                    <div className="grid grid-cols-2 w-full gap-3">
                        <Button onClick={handleGoogleLogin} className='w-full flex items-center justify-center gap-3 capitalize gro text-base btn bg-transparent text-black hover:bg-black hover:text-white'><FcGoogle className='text-xl' /> Google</Button>
                        <Button className='w-full flex items-center justify-center gap-3 capitalize gro text-base btn bg-transparent text-black hover:bg-black hover:text-white'><IoLogoApple className='text-xl' />Apple</Button>
                    </div>
                    <p className="gro font-semibold text-lg">Dont have an account ? <Link to={'/signUp'} className='text-[#0F3DDE]'>SignUp</Link></p>

                </div>
            </div>
            
            <div className="col-span-2 h-screen w-full">
                <img src={img} className='h-screen w-full' alt="" />
            </div>

            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />

        </div>
    );
};

export default Login;
