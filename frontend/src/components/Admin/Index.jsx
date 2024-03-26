import Sidebar from "./Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './admin.css'
// import Dashboard from "./Dashboard"
import { useState } from "react"
import Nav from "./Nav"

const Admin = () => {
  const [toggle, setToggle] = useState(true)
  const Toggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle &&
          <div className="col-md-2 min-vh-100 bg-white">
            <Sidebar />
          </div>}
          {/* {toggle && <div className="col-2"></div>} */}
          <div className="col">
          <Nav Toggle={Toggle}/>

          </div>
        </div>
      </div>

    </>
  )
}

export default Admin