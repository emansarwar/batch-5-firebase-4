import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // const from = locattion

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleName = event =>{
        setName(event.target.value);
    }
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePass = event =>{
        setPass(event.target.value);
    }
    const handleConPass = event =>{
        setConPass(event.target.value);
    }

    if(user){
        navigate('/shop')
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(pass !== conPass){
            setError("Your password didn't match with confirm password");
            return;
        }
        if(pass.length < 6){
            setError("Password must be 6 character or longer!");
            return;
        }
        createUserWithEmailAndPassword(email, pass)

        
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SIGN UP</h2>
                <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="name">NAME</label>
                    <input onBlur={handleName} type="text" name='name' id='' placeholder='Put your name' />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">EMAIL</label>
                    <input onBlur={handleEmail} type="email" name='email' id='' placeholder='Put your email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input onBlur={handlePass} type="password" name="password" id="" placeholder='Put your password' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password"> CONFIRM PASSWORD</label>
                    <input onBlur={handleConPass} type="password" name="confirm-password" id="" placeholder='Confirm your password' required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already an account ? <Link className='form-link' to="/login">Log In</Link></p>
            </div>
            
        </div>
    );
};

export default SignUp;