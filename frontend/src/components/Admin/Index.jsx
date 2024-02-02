import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Admin = () => {
  return (
    <>
    
    <div className="grid-container">
        <Header />
        <Sidebar />
        <Outlet />
    </div>
    
    </>
  )
}

export default Admin