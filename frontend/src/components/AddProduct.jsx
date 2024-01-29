import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addProductSchema = Yup.object().shape({});
import { useEffect } from "react"
import toast from 'react-hot-toast';


const Addproduct = () => {
    const [Data, setData] = useState([]);

    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProductForm = useFormik({
        initialValues: {
            pname: "",
            pdetail: "",
            pprice: "",
            pcategory: "",
            image: "",
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/product/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
            toast("Item uploaded successfully")
                Navigate("/Browse")
            }
            else {
           toast("Something went wrong")
            }
        },
        validationSchema: addProductSchema,

    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }



    // Manage Product Code

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
                    <td>{obj.pdetail}</td>
                    <td>{obj.pprice}</td>

                    <td>{obj.pcategory}</td>

                    <td>
                        <button className="btn btn-danger" onClick={() => { deleteFuction(obj._id) }}>Delete</button>
                    </td>
                </tr>
            </>
        ))
    }
    return (
        <>

            <div>

                <header className="bg-danger text-white ">
                    <div className="container py-5">
                        <h1 className="text-center">Manage Product</h1>

                    </div>
                </header>

                <div className="container mt-5">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>pname</th>
                                <th>pdetail</th>
                                <th>pprice</th>
                                <th>pcategory</th>
                                <th></th>


                            </tr>
                        </thead>
                        <tbody>
                            {displayUsers()}
                        </tbody>
                    </table>
                </div>

            </div>

            <form onSubmit={addProductForm.handleSubmit} className="mb-2 w-50 m-auto mt-5 ">
                <div className="form-group">
                    <label htmlFor="pname" className="mt-5 mb-2">pname</label>
                    <input
                        type="text"
                        name='pname'
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pname}
                        className="form-control mb-3"
                        required=""
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="imageUrl" className="mb-2"></label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pdetail" className="mb-2">pdetail</label>
                    <textarea
                        name="pdetail"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pdetail}
                        className="form-control mb-4"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pprice" className="mb-2">price</label>
                    <textarea
                        name="pprice"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pprice}
                        className="form-control mb-4"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pcategory" className="mb-2">pcategory</label>
                    <textarea
                        name="pcategory"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.pcategory}
                        className="form-control mb-4"
                        required=''
                    />
                </div>

                <button type="submit" className="btn btn-primary w-25">     Add Product</button>


            </form>
        </>
    )
}


export default Addproduct