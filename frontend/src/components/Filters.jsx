import { useEffect, useState } from "react";

const Filters = () => {

  const [setproductList] = useState([]);
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
      return (product.pcategory.toLowerCase().includes(value.toLowerCase()))


    }))

  }

  return (
    <>
      <div className="vh-100 pt-8 ">
        <p className="fs-3 fw-bold px-4 text-red-600">Category</p>
        <div className=" mt-3 fs-5 text-secondary">
          <input type="checkbox" onChange={filterproduct} /><span className="mx-2">Showpiece</span>
        </div>
        <div className=" mt-3 fs-5 text-secondary">
          <input type="checkbox" onChange={filterproduct} /><span className="mx-2">Decoration</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="checkbox" onChange={filterproduct} /><span className="mx-2">Water Containers</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="checkbox" onChange={filterproduct} /><span className="mx-2">Utensil</span>
        </div>

        <p className="fs-3 mt-4 text-red-600 fw-bold px-4">Price</p>
        <form action="">
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio" /><span className="mx-2">₹199-₹299</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio"  /><span className="mx-2">₹299-₹399</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio"  /><span className="mx-2">₹399-₹499</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio"  /><span className="mx-2">₹499-₹599</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio"  /><span className="mx-2">₹599-₹699</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio"  /><span className="mx-2">₹699-₹799</span>
        </div>
        <div className=" mt-3 text-secondary fs-5">
          <input type="radio"  /><span className="mx-2">Above ₹799</span>
        </div>
        </form>
      </div>

    </>
  )
}

export default Filters