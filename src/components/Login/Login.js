// import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [
        signInWithEmailAndPassword, 
        user, 
        loading, 
        error
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from.pathname || '/';
if(user){
    navigate(from , {replace: true})
}


    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handlePass = event =>{
        setPass(event.target.value);
    }
    if(user){
        navigate('/shop');
    }

    const handleUserSignIn = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email, pass)

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LOGIN</h2>
                <form onSubmit={handleUserSignIn}>
                <div className='input-group'>
                    <label htmlFor="email">EMAIL</label>
                    <input
                     onBlur={handleEmail} 
                     type="email" name='email' id='' placeholder='Put your email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input
                     onBlur={handlePass}
                    type="password" name="password" id="" placeholder='Put your password' required/>
                </div>
                <p>{error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John? <Link className='form-link' to="/signup">Create an account </Link></p>
            </div>
            
        </div>
    );
};

export default Login;

