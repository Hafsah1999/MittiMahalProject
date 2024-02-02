import  { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeToCart ,removeSingleIteams,emptycartIteam} from '../../Redux/CartContext';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import {loadStripe} from '@stripe/stripe-js';


const CartDetails = () => {
    const [ setData] = useState([]);

    const {carts} = useSelector((state)=>state.allCart);
    console.log(carts)
    
    // const [setPrice] = useState(0);
    // const [setTotalQuantity] = useState(0);

    const dispatch = useDispatch();

    // add to cart
    const handleIncrement = (e)=>{
        dispatch(addToCart(e))
    }

    // remove to cart
    const handleDecrement = (e)=>{
        dispatch(removeToCart(e));
        toast.success("Item Remove From Your Cart")
    }

    // remove single item 
    const handleSingleDecrement = (e)=>{
        dispatch(removeSingleIteams(e))
    }

    // empty cart
    const emptycart = ()=>{
        dispatch(emptycartIteam())
        toast.success("Your Cart is Empty")

    }

    // count total price
    // const total = ()=>{
    //     let totalprice = 0
    //     carts.map((ele)=>{
    //         totalprice = ele.price * ele.qnty + totalprice
    //     });
    //     setPrice(totalprice)
    // }  

    
    // // count total quantity
    // const countquantity = ()=>{
    //     let totalquantity = 0
    //     carts.map((ele) => {
    
    //         totalquantity = ele.qnty + totalquantity
    // });
    //     setTotalQuantity(totalquantity)
        
    // }  
    
    // useEffect(()=>{
    //     total()
    // },[total])

    // useEffect(()=>{
    //     countquantity()
    // },[countquantity]);

    // // payment integration
    // const makePayment = async()=>{
    //     const stripe = await loadStripe("ENTER YOUR PUBLISHABLE KEY");

    //     const body = {
    //         products:carts
    //     }
    //     const headers = {
    //         "Content-Type":"application/json"
    //     }
    //     const response = await fetch("http://localhost:7000/api/create-checkout-session",{
    //         method:"POST",
    //         headers:headers,
    //         body:JSON.stringify(body)
    //     });

    //     const session = await response.json();

    //     const result = stripe.redirectToCheckout({
    //         sessionId:session.id
    //     });
        
    //     if(result.error){
    //         console.log(result.error);
    //     }
    // }

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/product/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])




    return (
        <>
            <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className=' flex  justify-content-between'>
                                <h5 className='text-white m-0 fs-5 mb-3' style={{fontFamily:"cursive"}}>Items in the Cart{carts.length >0 ? `(${carts.length})`:""}</h5>
                                {
                                    carts.length > 0 ? <button className='btn btn-danger fs-5 mt-0 btn-sm'
                                    onClick={emptycart}
                                    ><i className='fa fa-trash-alt mr-2 '></i><span>EmptyCart</span></button>
                                        : ""
                                }
                            </div>

                        </div>
                        <div className="card-body p-0">
                                {
                                    carts.length === 0 ? <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='cart-empty'>
                                                        <i className='fa fa-shopping-cart'></i>
                                                        <p>Your Cart Is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> :
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr className='text-center'>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th> <span id="amount" className='amount'>Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts.map((data)=>{
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <button className='btn block m-auto'
                                                                    onClick={()=>handleDecrement(data.id)}
                                                                    ><i className='fa fa-trash-alt'></i></button>
                                                                </td>
                                                                <td><div className='text-center fs-5 ' style={{fontFamily:"serif"}}><p>{data.pcategory}</p> </div></td>
                                                                <td><div className='text-center fs-5'  style={{fontFamily:"serif"}}><p>{data.pname}</p></div></td>
                                                                <td className='text-center fs-5'  style={{fontFamily:"serif"}}>{data.pprice}</td>
                                                                <td>
                                                                    <div className="text-center">
                                                                        <button className='btn' type='button' 
                                                                        onClick={data.qnty <=1 ?()=>handleDecrement(data.id) :()=>handleSingleDecrement(data)}
                                                                        >
                                                                            <i className='fa fa-minus'></i>
                                                                        </button>
                                                                       <button className="btn">{data.qnty}</button> 
                                                                        <button className='btn' type='button' onClick={()=>handleIncrement(data)}>
                                                                            <i className='fa fa-plus'></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                                <td className='text-center fs-5'  style={{fontFamily:"serif"}}>₹ {data.qnty * data.pprice}</td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        {/* <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={2}>&nbsp;</th>
                                                <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                                <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ {totalprice}</span></th>
                                                <th className='text-right'><button className='btn btn-success' onClick={makePayment} type='button'>Checkout</button></th>
                                            </tr>
                                        </tfoot> */}
                                    </table>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDetails


