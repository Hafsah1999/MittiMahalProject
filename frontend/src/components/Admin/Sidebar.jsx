<<<<<<< HEAD
import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { BsCart3 } from 'react-icons/bs';
>>>>>>> 0c42f01a6a5761200fb1a6c532d4dd7df8327457

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
<<<<<<< HEAD
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h6 className='icon_header'/> Mitti Mahal
            </div>
            <span className='icon1 close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
           
            <li className='sidebar-list-item'>
                <Link to="/admin/dashboard">
                    <BsFillArchiveFill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/ManageProduct">
                    <BsFillGrid3X3GapFill className='icon'/> Manage Product
                </Link>
            </li>
            
        </ul>
    </aside>
  )
=======
    <>

      

        <aside

          className=" top-0 left-0 bg-dark z-40 w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3  py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
            <ul className="space-y-2 font-medium fs-5">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <MdSpaceDashboard className='fs-5 text-slate-600' />
                  <span className="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>

              </li>

              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaUser className='fs-5 text-slate-600' />
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Product"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaShoppingBag className='fs-5 text-slate-600' />
                  <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <BsCart3 className='fs-5 text-slate-600' />
                  <span className="flex-1 ms-3 whitespace-nowrap">Categories</span>
                </Link>
              </li>
            </ul>
          </div>

</aside>



        </>
        )
>>>>>>> 0c42f01a6a5761200fb1a6c532d4dd7df8327457
}

        export default Sidebar