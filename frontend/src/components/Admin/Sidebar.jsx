import { BsCart, BsCart3 } from "react-icons/bs"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>

      <aside>
        <div className="">
        <div className="flex">
          <BsCart3 />SHOP
        </div>
        <span className="">X</span>
        </div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>

          </li>
          <li>
            <Link to="/">Customers</Link>

          </li>
          <li>
            <Link to="/">Manage Product</Link>

          </li>
          <li>
            <Link to="/">Add Product</Link>

          </li>
        
        

        </ul>
      </aside>

    </>
  )
}

export default Sidebar