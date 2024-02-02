import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Header from './components/Main/Header'
import Addproduct from './components/Admin/AddProduct'
import Dashboard from './components/Admin/Dashboard'
import CartDetails from './components/Main/CartDetails'
import Decoration from './components/Main/Decoration'
import Footer from './components/Main/Footer'
import Product from './components/Main/Product'
import Showpiece from './components/Main/Showpiece'
import Utensil from './components/Main/Utensil'
import ViewProduct from './components/Main/ViewProduct'
import Watercontainer from './components/Main/Watercontainer'
import About from './components/User/About'
import Home from './components/Main/Home'
import CartContext from './Redux/CartContext'
import Login from './components/User/Login'
import UpdateProduct from './components/Admin/UpdateProduct'
import Signup from './components/User/Signup'
import Feedback from './components/User/Feedback'
import PageNotFound from './components/PageNotFound'
import Contact from './components/User/Contact'
import { AppProvider } from './AppContext'
import Admin from './components/Admin/Index'
import ManageProduct from './components/Admin/ManageProduct'



const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AppProvider>
          <Header />
          <main className="pt-16">
            <Routes >
              <Route path="/" element={<Home />} />

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

              <Route path="/admin" element={<Admin />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path="UpdateProduct/:id" element={<UpdateProduct />} />
                <Route path='manageProduct' element={<ManageProduct />} />
                <Route path="/AddProduct" element={<Addproduct />} />

              </Route>

              <Route path="/Product" element={<Product />} />

              <Route path="/Contact" element={<Contact />} />

            </Routes>
            <Footer />

          </main>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App