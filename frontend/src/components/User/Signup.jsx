import { useState } from 'react';
import SignupLoginImg from '../../assets/loginimg.webp'
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../../utility/imagetobase64'
import { toast } from 'react-hot-toast';
const Signup = () => {
    const navigate = useNavigate();

    const [showpassword, setshowpassword] = useState(false)
    const [showconfirmpassword, setshowconfirmpassword] = useState(false)
    const handleShowPassword = () => {
        setshowpassword(preve => !preve)
    }
    const handleShowconfirmPassword = () => {
        setshowconfirmpassword(preve => !preve)
    }
    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        image: ""
    });






    console.log(data);
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setdata((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleProfileImage = async (e) => {
        console.log(e.target.files[0]);
        const data = await ImagetoBase64(e.target.files[0])
        console.log(data);

        setdata((preve) => {
            return {
                ...preve,
                image: data
            }
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { firstname, email, password, confirmpassword } = data
        if (firstname && email && password && confirmpassword) {
            if (password === confirmpassword) {
                const res = await fetch('http://localhost:5000/user/add', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });
                const resData = await res.json()
                console.log(resData)

                toast("Signup successfull");
                navigate("/Login")
            }
            else {
                toast("password and confirm password not equal")
            }
        }
        else {
            toast("Please enter required field")

        }
    }




    return (
        <>
            <div className="container p-5">
                <div className="row p-5">

                    <div className="col-md-6 ">
                        <div className="w-full max-w-sm bg-white m-auto  flex  flex-col p-4">
                            {/* <h1 className="">Signup</h1> */}
                            <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer">
                                <img src={data.image ? data.image : SignupLoginImg} alt="w-full h-full" />
                                <label htmlFor="profileImage">
                                    <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center">
                                        <p className=" text-sm p-1 text-white cursor-pointer">Upload</p>
                                    </div>
                                    <input type="file" accept="image/*" className='hidden' id="profileImage" onChange={handleProfileImage} />
                                </label>
                            </div>
                            <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit} >
                                <label htmlFor="fname">First Name</label>
                                <input type="text" name="firstname" id="firstname" value={data.firstname} onChange={handleOnChange} className='mt-1 mb-2 w-full bg-slate-400 px-2 py-1 rounded focus-within:outline-blue-300' />
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" name="lastname" id="lastname" value={data.lastname} onChange={handleOnChange} className='mt-1 w-full mb-2 bg-slate-400 px-2 py-1 rounded  focus-within:outline-blue-300' />
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" value={data.email} onChange={handleOnChange} className='mt-1 w-full mb-2 bg-slate-400 px-2 py-1 rounded  focus-within:outline-blue-300' />


                                <label htmlFor="password">Password</label>
                                <div className="flex  px-2 py-1 mb-2 mt-1 bg-slate-400 rounded outline-none  focus-within:outline-blue-300">
                                    <input type={showpassword ? "text" : "password"} name="password" value={data.password} onChange={handleOnChange} id="password" className='bg-slate-400 border-none outline-none w-full ' />
                                    <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showpassword ? <BiShow /> : <BiHide />}</span>
                                </div>
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                <div className="flex  px-2 py-1 mb-2 mt-1 bg-slate-400 rounded outline-none  focus-within:outline-blue-300">
                                    <input type={showconfirmpassword ? "text" : "password"} name="confirmpassword" value={data.confirmpassword} onChange={handleOnChange} id="confirmpassword" className='bg-slate-400 border-none outline-none w-full ' />
                                    <span className='flex text-xl cursor-pointer' onClick={handleShowconfirmPassword}>{showconfirmpassword ? <BiShow /> : <BiHide />}</span>
                                </div>

                                <button type="submit" className=" w-full max-w-[150px] block m-auto bg-red-600 hover:bg-red-700 cursor-pointer text-white text-xl font-medium  text-center py-1 rounded-full px-4 mt-4 ">Signup</button>
                            </form>
                            <p className="text-sm mt-2">Already have an account ? <Link to="/Login" className='text-red-500 underline'>Login</Link> </p>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className='mt-5' src="https://media.istockphoto.com/id/1361114024/vector/potter-girl-a-woman-sculpts-a-clay-vase-behind-a-potters-wheel.jpg?s=612x612&w=0&k=20&c=g3nnQN5oRPFu0lZfzY3fhTjs_cXe38uTfSzmhOluUbk=" alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signup