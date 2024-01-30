import { Link, NavLink } from "react-router-dom"
import { LuUserCircle2 } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Logo from '../assets/Logo2.png'
import { useSelector } from "react-redux";

const Header = () => {

const {carts} = useSelector((state)=>state.allCart);


    const [showMenu, setshowMenu] = useState(false)
    const handleShowMenu = () => {
        setshowMenu(preve => !preve)
    }
    return (
        <>
            <header className="fixed shadow-md  w-full h-14 px-4  md:px-4 z-50 bg-white">
                <div className="flex items-center   h-full justify-between">
                    <div className="h-12">
                        <Link to="/" className="nav-link">
                            <img style={{width:"140px"}} className="h-12" src={Logo} alt="" />
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 md:gap-7">
                        <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
                            <Link to="/" className="text-red-600 fw-bold fs-4 hover:text-blue-500 " style={{fontFamily:"serif"}}>Home</Link>

                            <Link to="/Product" className="text-red-600 fw-bold fs-4 hover:text-blue-500 " style={{fontFamily:"serif"}}>Product</Link>
                            <Link to="/About" className="text-red-600 fw-bold fs-4 hover:text-blue-500 " style={{fontFamily:"serif"}}>About</Link>

                            <Link to="/Contact" className="text-red-600 fw-bold fs-4 hover:text-blue-500 " style={{fontFamily:"serif"}}>Contact</Link>


                        </nav>
                        <NavLink to="/CartDetails" className="text-2xl text-slate-600 relative  hover:text-blue-500 ">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                        <FaShoppingCart />
                            
                        </span>
                    </div>
                    </NavLink>

                      
                        <div className=" text-slate-600" onClick={handleShowMenu}>
                            <div className="text-2xl cursor-pointer">
                                <LuUserCircle2 className="text-slate-600 fw-bold fs-3 hover:text-blue-500 "/>

                            </div>
                            {showMenu &&
                                <div className="absolute right-0 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                                    <Link to="Signup" className="whitespace-nowrap cursor-pointer text-grey fw-bold fs-5 hover:text-blue-500 " style={{fontFamily:"serif"}}>
                                        Sign up
                                    </Link>
                                    <Link to="/Login" className="whitespace-nowrap cursor-pointer text-grey fw-bold fs-5 hover:text-blue-500 " style={{fontFamily:"serif"}}>Login</Link>

                                </div>
                            }

                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header