import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required("Required"),
})

const Feedback = () => {

    const navigate = useNavigate();

    const feedbackForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone_number: '',
            message: ''
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:5000/feedback/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    text: 'We will contact you soon'
                })
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Message Failed',
                    text: 'Oops! Something went wrong'

                })
            }
        },
        validationSchema: FeedbackSchema,
    });

    return (
        <div className="container mt-5">
            <div className="card-shadow">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center p-5">
                        <h1 className='position-absolute display-5 text-danger' style={{ fontFamily: "fantasy" }}>Query ? Connect with us</h1>
                        <form onSubmit={feedbackForm.handleSubmit}>
                            <div className="row">
                                
                                <div className="col-md-6 c-margin">
                                    <input type="text" className="form-control inp-clr" placeholder="Name"
                                        id="name"
                                        onChange={feedbackForm.handleChange}
                                        value={feedbackForm.values.name} />
                                </div>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input type="email" className="form-control mt-4 inp-clr" placeholder="Email"
                                            id="email"
                                            onChange={feedbackForm.handleChange}
                                            value={feedbackForm.values.email} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="number" className="form-control mt-4 inp-clr" placeholder="Phone Number"
                                            id="phone_number"
                                            onChange={feedbackForm.handleChange}
                                            value={feedbackForm.values.phone_number} />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea type="text" className="form-control mt-4 inp-clr" placeholder="Enquiry message..."
                                            id="message"
                                            onChange={feedbackForm.handleChange}
                                            value={feedbackForm.values.message} />
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-danger mt-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img className='c-img' src="https://cdn.dribbble.com/users/180062/screenshots/6784972/dribbble.gif" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback