// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleName = event =>{
        setName(event.target.value);
    }

    // const handleEmail = event =>{
    //     setEmail(event.target.value);
    // }
    const handleAddress = event =>{
        setAddress(event.target.value);
    }
    const handlePhone = event =>{
        setPhone(event.target.value);
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
        

        
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="name">NAME</label>
                    <input onBlur={handleName} type="text" name='name' id='' placeholder='Put your name' />
                </div>
                <div className='input-group'>
                    <label htmlFor="email">EMAIL</label>
                    <input value={user.email} readOnly type="email" name='email' id='' placeholder='Put your email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="Address">Address</label>
                    <input onBlur={handleAddress} type="text" name="address" id="" placeholder='Put your address' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-phone"> Phone Number</label>
                    <input onBlur={handlePhone} type="number" name="phone number" id="" placeholder='Your Phone Number' required/>
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                {/* <p>Already an account ? <Link className='form-link' to="/login">Log In</Link></p> */}
            </div>
            
        </div>
    );
};

export default Shipment;