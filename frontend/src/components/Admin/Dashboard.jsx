import { FaShoppingBag } from "react-icons/fa"
import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>

      <p className="">Dashboard</p>
      <div className="card">
      <Link
                  to="/Product"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaShoppingBag className='fs-5 text-slate-600' />
                  <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                </Link>
                <p className="">300</p>

      </div>
    </>
  )
}

export default Dashboard