import { useState } from 'react';
import SignupLoginImg from '../assets/loginimg.webp'
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-hot-toast';
import useAppContext from '../AppContext';


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too short')
        .max(20, 'Too long')
        .required('Required'),
})

const Login = () => {
    const { setLoggedin } = useAppContext();

    const navigate = useNavigate();
    //step1 : formik initialization
    const LoginForm = useFormik({
        initialValues: {

            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:5000/user/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                toast('Login Success')
                setLoggedin(true);
                const data = await res.json();
                sessionStorage.setItem('isloggedin', true);
                if (data.role === 'admin') {
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    navigate('/Admin/dashboard');
                } else {
                    sessionStorage.setItem('user', JSON.stringify(data));
                    navigate('/');
                }

            }
            else if (res.status === 400
            ) {
                toast("Error")
            }

        },
        validationSchema: LoginSchema

    })


    const [showpassword, setshowpassword] = useState(false)
    const handleShowPassword = () => {
        setshowpassword(preve => !preve)
    }





    return (
        <>
            <div className="container px-5">
                <div className="row px-5">
                    <div className=" col-md-6 p-5">
                        <img src="https://media.istockphoto.com/id/1355237827/vector/woman-decorating-pot-working-at-ceramic-studio.jpg?s=612x612&w=0&k=20&c=jkCuvNGGRAItWcmgDKhzgFuQ6kl4DAa6EAcBAfNY_ek=" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="w-full max-w-sm bg-white m-auto  flex mt-5  flex-col ">
                            {/* <h1 className="">Signup</h1> */}
                            <div className="w-20 overflow-hidden rounded-full mt-5 drop-shadow-md shadow-md m-auto">
                                <img src={SignupLoginImg} alt="w-full" />
                            </div>
                            <form className="w-full py-3 flex flex-col " onSubmit={LoginForm.handleSubmit} >

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" value={LoginForm.values.email} onChange={LoginForm.handleChange} className='mt-1 w-full mb-2 bg-slate-400 px-2 py-1 rounded  focus-within:outline-blue-300' />


                                <label htmlFor="password">Password</label>
                                <div className="flex  px-2 py-1 mb-2 mt-1 bg-slate-400 rounded outline-none  focus-within:outline-blue-300">
                                    <input type={showpassword ? "text" : "password"} name="password" value={LoginForm.values.password} onChange={LoginForm.handleChange} id="password" className='bg-slate-400 border-none outline-none w-full ' />
                                    <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showpassword ? <BiShow /> : <BiHide />}</span>
                                </div>


                                <button type="submit" className=" w-full max-w-[150px] block m-auto bg-red-600 hover:bg-red-700 cursor-pointer text-white text-xl font-medium  text-center py-1 rounded-full px-4 mt-4 ">Login</button>
                            </form>
                            <p className="text-sm mt-2">Don&apos;t have an account ? <Link to="/Signup" className='text-red-500 underline'>Signup</Link> </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login