import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import UpdateProduct from './components/UpdateProduct'
import ViewProduct from './components/ViewProduct'
import Addproduct from './components/AddProduct'
import Cart from './components/Cart'
import Decoration from './components/Decoration'
import Feedback from './components/Feedback'
import PageNotFound from './components/PageNotFound'
import Showpiece from './components/Showpiece'
import Utensil from './components/Utensil'
import Watercontainer from './components/Watercontainer'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Header />
        <main className="pt-16">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/UpdateProduct" element={<UpdateProduct />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/viewProduct/:id" element={<ViewProduct />} />
            <Route path="/AddProduct" element={<Addproduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Decoration" element={<Decoration />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Showpiece" element={<Showpiece />} />
            <Route path="/Utensil" element={<Utensil />} />
            <Route path="/WaterContainer" element={<Watercontainer />} />



            <Route path="/Product" element={<Product />} />

            <Route path="/Contact" element={<Contact />} />

          </Routes>
          <Footer />

        </main>
      </BrowserRouter>
    </>
  )
}

export default App