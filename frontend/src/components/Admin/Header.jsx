<<<<<<< HEAD
import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import logo from '../../assets/Logo2.png'
import { Link } from 'react-router-dom'

function Header({ OpenSidebar, children }) {
  return (
    <div className='admin-header h'>

      <header className='header1'>
        {/* <div className='menu-icon'>
          <BsJustify className='icon' onClick={OpenSidebar} />
        </div> */}
        <Link className="navbar-brand me-2" to="/">
          <img
            src={logo}
            height={10}
            alt="skjh"
            // loading="lazy"
            style={{ marginTop: "-8px", marginBottom: "-8px" }}
          />
        </Link>
        {/* <div className='header-right'>
          <BsPersonCircle className='icon' />
        </div> */}
      </header>
      {children}
    </div>
=======
import { BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle} from 'react-icons/bs'
import Logo from '../../assets/Logo2.png'

const Header = () => {
  return (
    <>
    
    <header className="flex items-center shadow justify-between  py-2 px-4" >
      <div>
        <img src={Logo} alt=""  className='w-25'/>
      </div>
       
        <div className='' >
            {/* <BsSearch className='fs-4'/> */}
        </div>
        <div className="flex px-2">
            <BsFillBellFill  className='fs-4'/>
            <BsFillEnvelopeFill className='mx-3 fs-4'/>
            <BsPersonCircle className='fs-4' />
        </div>
    </header>
    
    </>
>>>>>>> 0c42f01a6a5761200fb1a6c532d4dd7df8327457
  )
}

export default Header
