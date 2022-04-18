import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if (user){
          navigate(from, { replace: true })
      }

      let errorElement;
      if (error) {
          errorElement = <div>
              <p className='text-danger'>Error: {error?.message}</p>
          </div>
  
      }

    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email,password)
    }

    return (
        <div className='m-5  mx-auto p-4 shadow-lg form-container '>
            <h3 className='text-center text-primary'> Please Log In</h3>
            <Form onSubmit={handelSubmit} className='  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                    Log In
                </Button>
                <p className='pt-2 mb-0'>Don’t have an account?<Link to='/signup' className='text-info font-weight-bold text-decoration-none pe-auto '> Sign Up Now !</Link></p>
                <p className='text-primary mb-0'>Forget Password?</p>
                <SocialLogin></SocialLogin>
            </Form>
            {errorElement}
        </div>
    );
};

export default Login;