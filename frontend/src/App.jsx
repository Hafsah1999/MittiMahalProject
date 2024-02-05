import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Addproduct from './components/AddProduct'
// import Dashboard from './components/Admin/Dashboard'
import CartDetails from './components/CartDetails'
import Decoration from './components/Decoration'
import Footer from './components/Footer'
import Product from './components/Product'
import Showpiece from './components/Showpiece'
import Utensil from './components/Utensil'
import ViewProduct from './components/ViewProduct'
import Watercontainer from './components/Watercontainer'
import About from './components/About'
import Home from './components/Home'
import CartContext from './Redux/CartContext'
import Login from './components/Login'
import UpdateProduct from './components/UpdateProduct'
import Signup from './components/Signup'
import Feedback from './components/Feedback'
import PageNotFound from './components/PageNotFound'
import Contact from './components/Contact'
import { AppProvider } from './AppContext'
// import Admin from './components/Admin/Index'
import Main from './components/Admin/Index'
import ManageProduct from './components/ManageProduct'



const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AppProvider>
          <Header />
      
            <Routes >
              <Route path="/"  element={<Home />} />

              <Route path="/CartDetails" element={<CartDetails />} />
              <Route path="/CartContext" element={<CartContext />} />

              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/viewProduct/:id" element={<ViewProduct />} />
              <Route path="/Decoration" element={<Decoration />} />
              <Route path="/Feedback" element={<Feedback />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/Showpiece" element={<Showpiece />} />
              <Route path="/Utensil" element={<Utensil />} />
              <Route path="/WaterContainer" element={<Watercontainer />} />
            
              <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
                
              <Route path="/AddProduct" element={<Addproduct />} />

              <Route path="/Admin" element={<Main />}>
                {/* <Route path='dashboard' element={<Dashboard />} /> */}
                <Route path='ManageProduct' element={<ManageProduct />} />

  

              </Route>

              <Route path="/Product" element={<Product />} />

              <Route path="/Contact" element={<Contact />} />

            </Routes>
            <Footer />

        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App