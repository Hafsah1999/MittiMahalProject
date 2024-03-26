import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo2.png'
const Sidebar = () => {
    return (
        <>

            <div className="bg-white sidebar p-2">
                <div className="m-2">
                  <Link to="/"> <img src={Logo} alt="" /></Link> 
                    {/* <i className="bi bi-bootstrap-fill me-2 fs-4"></i>
                    <span className="brand-name fs-4">Hafsah</span> */}
                </div>
                <hr className="text-dark" />
                <div className="list-group list-group-flush">
                    <a className="list-group-item py-2 my-2">
                    <Link to="Dashboard" className='nav-link'>
            <i className="bi bi-speedometer2  fs-5 me-3"></i>
                        <span className="fs-5">Dashboard</span>
                        </Link>
                    </a>
                    <a className="list-group-item py-2 my-2">
                        <i className="bi bi-house  fs-5 me-3"></i>
                        <span className="fs-5">Home</span>
                    </a>
                    <a className="list-group-item py-2 my-2">
                        <Link to="ManageProduct" className='nav-link'>
                        <i className="bi bi-table  fs-5 me-3"></i>
                            <span className="fs-5">Products</span></Link>
                    </a>
                    <a className="list-group-item py-2 my-2">
                        <i className="bi bi-people  fs-5 me-3"></i>
                        <span className="fs-5">Customers</span>
                    </a>
                    <a className="list-group-item py-2 my-2">
                        <i className="bi bi-power  fs-5 me-3"></i>
                        <span className="fs-5">Logout</span>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Sidebar