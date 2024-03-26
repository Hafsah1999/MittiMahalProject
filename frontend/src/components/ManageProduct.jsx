import { useState, useEffect } from "react"
import UpdateProduct from "./UpdateProduct";

const Manage = () => {
    const [Data, setData] = useState([]);


    //User fetch func
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

    //Delete func
    const deleteFuction = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/product/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchUserData();
        }
    }


    //User Display func
    const displayUsers = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.pname}</td>
                    <td>{obj.pcategory}</td>
                    <td>{obj.pprice}</td>


                    <td>{obj.pdetail}</td>
                
                  
                    <td>
                        <button className="btn btn-danger" onClick={() => {deleteFuction(obj._id)}}>Delete</button>
                    </td>
                    <td>
                        <UpdateProduct><button className="btn btn-success">Update</button></UpdateProduct>
                    </td>
                </tr>
            </>
        ))
    }



    return (
        <div>

            <header className="bg-danger text-white ">
                <div className="container py-5">
                    <h1 className="">Manage User</h1>

                </div>
            </header>

            <div className="container mt-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>pname</th>
                            <th>pdetail</th>
                            <th></th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Manage