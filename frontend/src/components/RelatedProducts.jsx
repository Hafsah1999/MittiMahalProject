import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedProducts = () => {

    const [productList, setproductList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/product/getall');
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

      const displayproductData = () => {
        if (productList.length === 0) {
          return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
        }
    
        return productList.map((product) => (
          <>
            <div className='col-md-3 mt-4 '>
              <div className=" bg-transparent " style={{ border: "none" }}>
                <Link to={`/ViewProduct/${product._id}`}> <img src={'http://localhost:5000/' + product.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />
                </Link>
                <div className="card-footer" style={{ border: "none", height: "200px" }}>
                  <h2 className=' fw-semibold fs-5 mt-3 mb-3' style={{ fontFamily: "serif" }}>{product.pname}</h2>
                  <p className='text-red-700' style={{ fontFamily: "cursive" }}>{product.pprice}</p>
    
                  <p className='text-black  mb-3' style={{ fontFamily: "cursive" }}>{product.pcategory}</p>
    
                  {/* <button className='mt-2 mb-2 btn btn-danger' onClick={() => send(product)} >Add TO Cart</button> */}
    
                  <Link to={`/ViewProduct/${product._id}`}><button className="btn " style={{ fontFamily: "serif" }} >View More</button></Link>
                </div>
              </div>
            </div>
          </>
        ))
      }

  return (
    <>
    
    <div className="flex flex-col items-center vh-100">
        <h1 className="text-gray-800 fs-5 fw-semibold">Related Products</h1>
        <hr className="w-25 mt-2 bg-gray-800" style={{borderRadius:"10px",height:"6px"}}/>
        <div className="mt-5 flex ">
   {displayproductData()}
        </div>
    </div>
    
    </>
  )
}

export default RelatedProducts