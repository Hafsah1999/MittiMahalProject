import  {  useEffect, useState } from 'react'



const Browse = () => {
 

  const [productList, setproductList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/product/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setproductList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

 
  const filterproduct = (e) => {
    const value = e.target.value;
    setproductList(masterList.filter((product) => {
      return (product.pname.toLowerCase().includes(value.toLowerCase()))
    }))
    
  }




  const displayproductData = () => {
    if (productList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return productList.map((product) => (
      <>
        <div className='col-md-3 mt-4 mb-4'>
          <div className="card bg-transparent shadow" style={{border:"none"}}>
            <img src={'http://localhost:5000/' + product.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />

            <div className="card-footer" style={{border:"none",  height:"200px"}}>
              <h3 className=' fw-semibold mt-3 mb-3' style={{fontFamily:"serif"}}>{product.pname}</h3>
              <p className='text-secondary' style={{fontFamily:"cursive"}}>{product.pdetail}</p>
              <button className='btn btn-success'>Add to Cart</button>
            </div>
          </div>
        </div>
      </>
    ))
  }

  return (
    <>

<form className="input-group mb-4 w-75 mx-auto">
            <input type="search" role="search" className="form-control" placeholder='Search' onChange={filterproduct} />
            <button className="btn btn-dark">Search</button>
          </form>

          <div className="container-fluid bg-dark bg-opacity-25">
        <div className="container">
        <div className="row mt-5 mb-5">
          {displayproductData()}
        </div>
      </div>
      </div>
    


       

    </>
  )
}

export default Browse