import { Link } from "react-router-dom"
import { LuUserCircle2 } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Logo from '../assets/Logo2.png'

const Header = () => {
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


                        <div className="text-2xl text-slate-600 relative">
                            <FaShoppingCart />
                            <div className="absolute -top-1 -right-1  text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0  text-sm text-center">0</div>
                        </div>
                        <div className=" text-slate-600" onClick={handleShowMenu}>
                            <div className="text-2xl cursor-pointer">
                                <LuUserCircle2 className="text-red-600 fw-bold fs-3 hover:text-blue-500 "/>

                            </div>
                            {showMenu &&
                                <div className="absolute right-0 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                                    <Link to="newProduct" className="whitespace-nowrap cursor-pointer text-grey fw-bold fs-5 hover:text-blue-500 " style={{fontFamily:"serif"}}>New Product</Link>
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