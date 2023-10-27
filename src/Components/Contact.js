import React from 'react'
import Footer from './Footer'
import Form from 'react-bootstrap/Form';

const Contact = () => {

   

    return (
        <>
            <section class="contact " id="Contact">
                <div class="Container">
                    <div class="text-center my-4">
                        <h1>Let's<span class="text-primary">Connect</span></h1>
                        <hr class="w-25 m-auto" />
                    </div>
                    <div class="Form col-md-10 mx-auto col-lg-5">
                        <Form className='mb-4 p-4 p-md-5 border rounded-3 bg-body-tertiary'  >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"  name='name' placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text"  name='email' placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text"  name='mobile' placeholder="Enter Mobile" />
                            </Form.Group>
                            <div class="bhatan text-center">
                                <button id="btn-btn" type="subnit"  class="w-50 btn btn-lg btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact