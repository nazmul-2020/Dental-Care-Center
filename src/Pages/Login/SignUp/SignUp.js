import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../SocialLogin/SocialLogin';

const SignUp = () => {
    return (

        //    <div>
        //         <h3 className='text-center text-primary'> Please Sign Up</h3>
        //         <Form className='w-25 mx-auto py-4'>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Label>Email address</Form.Label>
        //                 <Form.Control type="email" placeholder="Enter email" required />
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Label>Password</Form.Label>
        //                 <Form.Control type="password" placeholder="Password" required />
        //             </Form.Group>
        //             <Button className='w-100' variant="primary" type="submit">
        //                 Sign Up
        //             </Button>
        //         </Form>
        //     </div>

        <div className='m-5  radius-1'>
            <h3 className='text-center text-primary'> Please Sign Up</h3>
            <Form className=' mx-auto p-4 shadow-lg form-container'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-75 mx-auto d-block' variant="primary" type="submit">
                    Log In
                </Button>
                <p className='pt-2 text-center'>Don’t have an account?<span className='text-info font-weight-bold '> Sign Up Now !</span></p>
                <p className='text-primary mb-0'>Forget Password?</p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>

    );
};

export default SignUp;