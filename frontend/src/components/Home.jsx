// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartContext';


const Home = () => {

  const dispatch = useDispatch();


  // add to cart 
  const send = (e) => {
    dispatch(addToCart(e))
    toast.success("Item added In Your Cart")
  }


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
              <button className='mt-2 mb-2 btn btn-danger' onClick={() => send(product)} >Add TO Cart</button>
              <Link to={`/ViewProduct/${product._id}`}><button className="btn " style={{ fontFamily: "serif" }} >View More</button></Link>
            </div>
          </div>
        </div>
      </>
    ))

  }
  return (
    <>
      {/* <div className=" bg-slate-200"> */}

      {/* Section1 */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper  pt-2 mb-5"
      >
        <SwiperSlide>
          <div className="container p-1">
            <div className="row bg-img-home-1 " >
              <div className="col-  d-flex justify-content-center flex-column align-items-center bg-dark bg-opacity-50">
                <p className="fw-semibold text-center  px-4" style={{ fontFamily: "serif", letterSpacing: "2px", fontSize: "47px", color: "white", backgroundImage: "linear-gradient(to right,grey,lightgrey)" }}>Elevate your lifestyle  with <span style={{ color: "brown" }}> Mitti Mahal</span></p>
                <p className="fs-5 py-3 text-center text-white  px-5  bg-slate-400 bg-opacity-25 mb-4 mt-3" style={{ fontFamily: "monospace", letterSpacing: "1px", wordSpacing: "3px" }}>It&apos;s a journey into the heart of mud artistry. Join us in fostering a deeper connection <br /> with the Earth, one mud-made masterpiece at a time. Shop with us and bring<br />  the beauty of nature into your everyday life.</p>
                <Link to="/Product"><button className="btn  fs-5 px-5 fw-semibold text-white" style={{ fontFamily: "revert-layer", letterSpacing: "2px", backgroundColor: "brown" }}>Explore..</button>
                </Link>
              </div>

            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="container p-1">
            <div className="row bg-img-home-2 " >
              <div className="col-  d-flex justify-content-center flex-column align-items-center bg-dark bg-opacity-50">
                <p className="fw-semibold text-center px-4" style={{ fontFamily: "serif", letterSpacing: "2px", fontSize: "47px", color: "white", backgroundImage: "linear-gradient(to right,grey,lightgrey)" }}>Quenching Thirst Naturally  with <span style={{ color: "brown" }}> Mitti Mahal</span></p>

                <p className="fs-5 py-3 text-center text-white  px-5  bg-slate-400 bg-opacity-25 mb-4 mt-3" style={{ fontFamily: "monospace", letterSpacing: "1px", wordSpacing: "3px" }}>Hydration meets artistry with our mud-made water containers. <br /> Transform the way you store and serve water at home with these  uniquely <br /> designed and sustainable water containers</p>
                <Link to="/Watercontainer"> <button className="btn px-5 fs-5  fw-semibold text-white" style={{ fontFamily: "revert-layer", letterSpacing: "2px", backgroundColor: "brown" }}>Explore..</button>
                </Link>
              </div>

            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="container p-1">
            <div className="row bg-img-home-4 " >
              <div className="col-  d-flex justify-content-center flex-column align-items-center bg-dark bg-opacity-50">
                <p className="fw-semibold text-center px-4 bg-opacity-25" style={{ fontFamily: "serif", backgroundImage: "linear-gradient(to right,grey,lightgrey)", letterSpacing: "2px", fontSize: "47px", color: "white" }}>Elevate Your <span style={{ color: "brown" }}> Kitchen</span> with Earthy Elegance </p>

                <p className="fs-5 py-3 text-center text-white  px-5  bg-slate-400 bg-opacity-25 mb-4 mt-3" style={{ fontFamily: "monospace", letterSpacing: "1px", wordSpacing: "3px" }}>Transform your kitchen with the natural touch of our mud-made utensils. <br />  Experience the joy of cooking with these stylish and functional utensils <br /> that blend simplicity with modern design.</p>
                <Link to="/Utensil">  <button className="btn  fs-5 px-5 fw-semibold text-white" style={{ fontFamily: "revert-layer", letterSpacing: "2px", backgroundColor: "brown" }}>Explore..</button>

                </Link></div>

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container p-1">
            <div className="row bg-img-home-3 " >
              <div className="col-  d-flex justify-content-center flex-column align-items-center bg-dark bg-opacity-50">
                <p className="fw-semibold text-center px-4 " style={{ fontFamily: "serif", letterSpacing: "2px", fontSize: "47px", color: "white", backgroundImage: "linear-gradient(to right,grey,lightgrey)" }}>Mud Artistry in <span style={{ color: "brown" }}>  Decorative </span>Delights</p>
                <p className="fs-5 py-3 text-center text-white  px-5  bg-slate-400 bg-opacity-25 mb-4 mt-3" style={{ fontFamily: "monospace", letterSpacing: "1px", wordSpacing: "3px" }}>Explore our beautiful mud-made decoration products that bring nature&apos;s charm <br />Transform your space with the earthy tones of our mud decor, turning your home <br /> into a cozy haven of natural beauty.</p>
                <Link to="/Decoration"> <button className="btn px-5 fs-5 fw-semibold text-white" style={{ fontFamily: "revert-layer", letterSpacing: "2px", backgroundColor: "brown" }}>Explore..</button>
                </Link></div>

            </div>
          </div>
        </SwiperSlide>


      </Swiper>




      {/* Section2 */}

      <div className="container">
        <div className="card m-5 bg-white shadow border-none bg-opacity-25">
          <div className="row p-5">

            <div className="col-md-6 ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper   pt-2 "
              >
                <SwiperSlide>
                  <img src="https://cla.umn.edu/sites/cla.umn.edu/files/ceramics_classes_2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_640.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://c0.wallpaperflare.com/preview/311/294/472/man-making-pot-near-wall-in-house.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gopi3.width-1000.format-webp.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://images.pexels.com/photos/7155435/pexels-photo-7155435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://www.shutterstock.com/image-photo/skilled-hands-female-potter-shaping-600nw-2160235079.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://media.istockphoto.com/id/1152196565/photo/man-painting-handmade-pottery-at-ceramic-workshop.jpg?s=612x612&w=0&k=20&c=9fRfnBuyZUJsLzV_ejdFjCr1UBiwsHgK2-AEC9qrDPY=" alt="" />
                </SwiperSlide>

              </Swiper>
            </div>
            <div className="col-md-6 col">
              <p className="fs-2  bg-secondary px-2  bg-opacity-25 mt-4 text-center text-red-800 py-1 fw-bold" style={{ fontFamily: "Papyrus", backgroundImage: "linear-gradient(to right,grey,lightgrey)" }}>Embrace Clay Artistry at Mittimahal</p>
              <p className="mt-4 ms-2" style={{ letterSpacing: "1px", wordSpacing: "2px", fontSize: "15px" }}> Mittimahal is like a magical place where skilled artists use their hands to shape and create beautiful items from clay. It&apos;s not just about making things; it&apos;s about sharing stories, traditions, and a love for creating with our hands. Each piece made here is like a work of art, showing the beauty of handmade things. Come and explore Mittimahal with us, where every piece tells a story of craftsmanship and the joy of making things from clay</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section3 */}


      <div className="container mx-5 px-5 mb-5">
        <div className="px-5 d-flex justify-center py-2 ">
          <Link to="/" className='Category-1 mx-2 px-5 py-2'>All</Link>



          <Link to="/Showpiece" className='Category px-5 mx-2 py-2'>Showpiece</Link>
          <Link to="/Utensil" className='Category mx-2 px-5 py-2'>Utensils</Link>
          <Link to="/WaterContainer" className='Category mx-2 px-5 py-2'>Water Containers</Link>
          <Link to="/Decoration" className='Category mx-2 px-5 py-2'>Decoration</Link>
        </div>


        <div className="container-fluid mt-4 ">
          <div className="container">
            <div className="row  ">
              {displayproductData()}
            </div>
          </div>
        </div>
      </div>

      {/* Section4 */}

      <div className="container-fluid   flex items-center" style={{ backgroundImage: "linear-gradient(to bottom,grey,lightgrey)", height: "400px" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-3 mb-3">
              <div className="card shadow-lg bg-white bg-opacity-25 border-none  flex items-center content-center h-100">
                <div className="card-body">
                  <img className='block  m-auto mb-3' style={{ width: "80px", height: "80px" }} src="https://cdn-icons-png.flaticon.com/512/6602/6602254.png" alt="" />
                  <h4 className="text-center fw-bold">Pottery</h4>
                  <p className="mt-3 text-center " style={{ fontSize: "13px", fontFamily: "monospace" }}> Explore the enchanting world of pottery and discover one-of-a-kind pieces that blend artistry with functionality. Our curated collection features handcrafted pottery items, each telling a unique story of creativity and skill. </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card  shadow-lg  bg-white bg-opacity-25 border-none flex items-center content-center h-100">
                <div className="card-body">
                  <img className='block m-auto mb-3' style={{ width: "70px", height: "70px" }} src="https://static.thenounproject.com/png/4636011-200.png" alt="" />
                  <h4 className="text-center fw-bold">Design Process</h4>
                  <p className="mt-3 text-center " style={{ fontSize: "13px", fontFamily: "monospace" }}>At MittiMahal, our pottery design process is a journey that begins with passion and dedication. Each piece in our collection is a result of careful craftsmanship and artistic expression. The process starts with inspiration drawn from nature, culture, and everyday life. </p>

                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card  shadow-lg   bg-white bg-opacity-25 border-none  flex items-center content-center h-100">
                <div className="card-body">
                  <img className='block m-auto mb-3' style={{ width: "70px", height: "70px" }} src="https://cdn3.iconfinder.com/data/icons/personal-interests-line/128/09_Pottery-2-512.png" alt="" />
                  <h4 className="text-center fw-bold">Gift Cards</h4>
                  <p className="mt-3 text-center " style={{ fontSize: "13px", fontFamily: "monospace" }}>Give the gift of choice with MittiMahal Gift Cards! Perfect for any occasion, our gift cards allow your loved ones to explore and select their favorite handcrafted treasures from our collection.</p>

                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card  shadow-lg  bg-white bg-opacity-25 border-none py-2 flex items-center h-100 content-center">
                <div className="card-body">
                  <img className='block m-auto mb-3 img-fluid' style={{ width: "70px", height: "70px" }} src="https://cdn-icons-png.flaticon.com/512/3305/3305262.png" alt="" />
                  <h4 className="text-center fw-bold">Pottery Wheel</h4>
                  <p className="mt-3 text-center " style={{ fontSize: "13px", fontFamily: "monospace" }}>Step into the world of pottery creation with our state-of-the-art Pottery Wheels. Designed for both beginners and seasoned artisans, our pottery wheels provide the perfect platform for unleashing your creativity and molding clay into exquisite forms.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* </div> */}
    </>
  )
}

export default Home