import { useState } from 'react'
import './admin.css'
// import Header from './Header'
import Sidebar from './Sidebar'
// import Home from './Base'
// import { Outlet } from 'react-router-dom'

function Main() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
<<<<<<< HEAD
    <div>
      <div className='grid-container'>
        {/* <Header OpenSidebar={OpenSidebar} > <Outlet /> </Header> */}
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
      </div>
      
=======
    <>
    
    <div className="grid-container">
        <Header > <Outlet /></Header>
        <Sidebar ></Sidebar>
       
>>>>>>> 0c42f01a6a5761200fb1a6c532d4dd7df8327457
    </div>
  )
}

export default Main
