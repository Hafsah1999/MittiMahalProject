import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { BsCart3 } from 'react-icons/bs';

const Sidebar = () => {
  return (
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
}

        export default Sidebar