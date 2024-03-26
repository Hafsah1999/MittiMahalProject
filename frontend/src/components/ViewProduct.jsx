import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useParams } from 'react-router-dom'
import { addToCart } from '../Redux/CartContext';
import toast from 'react-hot-toast';
import RelatedProducts from './RelatedProducts';

const ViewProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(addToCart(e))
    toast.success("Item added In Your Cart")
  }



  const [productList, setproductList] = useState([]);
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/product/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setproductList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);




  return (
    <>
      {
        productList !== null ? (

          <div className="container pt-24 px-16">
            <div className="row ">
              <div className="col-md-2 block m-auto">
                <img src={'http://localhost:5000/' + productList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid  mb-2 w-75 " />
                <img src={'http://localhost:5000/' + productList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid mb-2 w-75 " />
                <img src={'http://localhost:5000/' + productList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid mb-2 w-75 " />
                <img src={'http://localhost:5000/' + productList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid mb-2 w-75 " />
              </div>
              <div className="col-md-4 block m-auto">
                <img src={'http://localhost:5000/' + productList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid  w-100  " />

              </div>
              <div className="col-md-6">
              <h1 className=' fw-semibold fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{productList.pname}</h1>
                <p className='text-red-800 fs-5 fw-bold' style={{ fontFamily: "cursive" }}>{productList.pprice}</p>
                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{productList.pdetail}</p>
                <button className='mt-3  btn btn-danger fs-5 px-4 ' onClick={() => send(productList)} >Add TO Cart</button>
                <p className=' mb-2 mt-4 ' ><span className="fw-bold me-1">Category:</span>{productList.pcategory}</p>
                <p className=""><span className="fw-bold me-1">Tags:</span>Unique,Latest</p>

              </div>
            </div>







            <div className="row pt-24">
              <RelatedProducts />
            </div>
          </div>


        ) : (
          <div>
            Loading
          </div>
        )
      }
    </>


  )
}


export default ViewProduct