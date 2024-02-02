import Logo from '../../assets/Logo.png'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
import { toast } from 'react-hot-toast';



const Footer = () => {
    const subscribe = () => {
        toast("Subscribed")
    }
    return (
        <>

            <div className="container mt-5 p-5">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-7 col-md-3 mb-3">
                            <img className='w-75 mt-5' src={Logo} alt="" />
                        </div>
                        <div className="col-6 col-md-1 mb-3">
                            <ul className="nav flex-column mt-5">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        About
                                    </a>
                                </li>

                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 ms-2 mb-3">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-3">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        <span> <FaPhone className='mb-2' /> 9876543210</span>
                                    </a>
                                </li>
                                <li className="nav-item mb-3">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        <MdEmail className='fs-5 mb-2' />Mittimahal123@gmail.com
                                    </a>
                                </li>
                                <li className="nav-item mb-3">
                                    <a href="#" className="nav-link p-0 text-body-secondary">
                                        <p ><ImAddressBook className='fs-5 mb-2' />123,Hazratganj <br />Lucknow.</p>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-md-4  mb-3">
                            <form>

                                <h1 className="mt-4 ms-4 mb-4 " style={{ fontSize: "40px", fontFamily: "sans-serif", wordSpacing: "2px" }}>Subscribe to our newsletter</h1>
                                <div className="input-group mb-3 ms-4 w-100">
                                    <input type="email" className="form-control " style={{ fontFamily: "cursive" }} placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className=" btn btn-warning fs-5" onClick={subscribe} style={{ fontFamily: "serif" }}>Subscribe</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className='text-center text-red-600'>© 2024 MittiMahal, Inc. All rights reserved.</p>

                    </div>
                </footer>
            </div>


        </>
    )
}

export default Footer