

import Swal from 'sweetalert2'

    
    import { useNavigate } from 'react-router-dom'

    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    
    const FeedbackSchema = Yup.object().shape({
        customername: Yup.string().required('Required').min(6, 'Too short')
            .max(20, 'Too long'),
        email: Yup.string().required('Required').email('Invalid email'),
        phoneno: Yup.string().required('Required'),
        feedback:Yup.string().required('Required'),
    })
    
    
    
    const Feedback = () => {
        const navigate = useNavigate();
    
    
        const FeedbackForm = useFormik({
            initialValues: {
                customername: "",
                email: "",
                phoneno: "",
                feedback:"",
            },
    
       
                    onSubmit: async (values, action) => {
            
                        console.log(values);
            
                        const res = await fetch('http://localhost:5000/Feedback/add', {
                            method: 'POST',
                            body: JSON.stringify(values),
                            headers: {
                                'Content-Type': 'application/json'
                            }
            
                        });
                        console.log(res.status)
                        action.resetForm();
            
                        if (res.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Feedback submitted successfully',
                            })
                            navigate('/Feedback');
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                            })
            
                        }
                    },
    
            validationSchema: FeedbackSchema
    
        })
        return (
            <div>
    
                <div className="bg-img-signup">
                    {/* <div className="card  bg-dark bg-opacity-25" style={{height:"100vh",border:"none"}}> */}
    
                    <div className="row">
                        <div className="col">
                            <div className="card Feedback-card bg-light bg-opacity-25  ">
    
                                <h1 className="text-center mt-5 signup-heading">Your Feedback</h1>
    
    
    
                                <div className="card-body">
                                    <form className='w-75 ' onSubmit={FeedbackForm.handleSubmit}>
                                    <span style={{ color: 'red', fontsize: '10', marginLeft: '50' }}>{FeedbackForm.touched.customername && FeedbackForm.errors.customername}</span>
                                        <input type="text" placeholder="customername" className="form-control " id="customername" value={FeedbackForm.values.customername} onChange={FeedbackForm.handleChange} />
                                        <span style={{ color: 'red', fontsize: '10' }}>{FeedbackForm.touched.email && FeedbackForm.errors.email}</span>
    
                                        <input type="email" placeholder="email" className="form-control  " id="email" value={FeedbackForm.values.email} onChange={FeedbackForm.handleChange} />
                                        <span style={{ color: 'red', fontsize: '10',  }}>{FeedbackForm.touched.phoneno && FeedbackForm.errors.phoneno}</span>
                                      
                                        <input type="phoneno" placeholder="phoneno" className="form-control " id="phoneno" value={FeedbackForm.values.phoneno} onChange={FeedbackForm.handleChange} />
    
                                        <span style={{ color: 'red', fontsize: '10',  }}>{FeedbackForm.touched.feedback && FeedbackForm.errors.feedback}</span>
                                      
                                      <input type="feedback" placeholder="Feedback" className="form-control  " id="feedback" value={FeedbackForm.values.feedback} onChange={FeedbackForm.handleChange} />
  
                                         <button type="submit" className="btn btn-primary w-100   mt-4 fs-5 p-1  " style={{ marginLeft: '50px', borderRadius: "20px", fontFamily: "serif" }}>Submit</button>
                                     
    
                                    </form>
                                </div>
    
    
    
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Feedback
    
    
    