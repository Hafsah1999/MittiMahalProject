import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewProduct = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // const handleReset = () => {
  //     setCount(0);
  // }



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

          <div className="container p-5">
            <div className="row ">
              <div className="col-md-6 flex items-center justify-center">
                <img src={'http://localhost:5000/' + productList.image} alt="" className="  img-fluid  w-75 "  />

              </div>
              <div className="col-md-6 ">
                <h1 className=' fw-semibold fs-1 mt-3 mb-3' style={{ fontFamily: "serif" }}>{productList.pname}</h1>
                <p className='text-red-800 fs-5' style={{ fontFamily: "cursive" }}>{productList.pprice}</p>
                <p className='text-blue-800 fs-5 fw-bold mt-3' style={{ fontFamily: "cursive" }}>{productList.pcategory}</p>

                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{productList.pdetail}</p>
                <div className="flex">
                <div className="button-container flex">
                  <button className="increase-button btn" onClick={handleIncrement}>+</button>
                  <button className="count-display btn "> {count}</button>

                  <button className="decrease-button btn " onClick={handleDecrement}>-</button>
                  {/* <button className="reset-button" onClick={handleReset}>Reset</button> */}
                </div>

                <Link to="/Cart"><button className='btn btn-success fs-5  px-3' style={{ fontFamily: "serif" }}>Add to Cart</button></Link>
                </div>

                <Link to="/BuyNow"><button type="button " style={{ fontFamily: "serif" }} className='btn btn-danger fs-5 w-50 mt-3'>Buy Now</button></Link>

              </div>
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