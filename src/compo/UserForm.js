import React from 'react';
import './UserForm.css';

const UserForm = () => {
    const handleUser =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);

    }
    return (
        <div>
            <form onSubmit={handleUser}>
            <input className='inputTags' type="text" name="name" placeholder='Enter Your Name...' /><br></br>
            <input className='inputTags' type="email" name="email" placeholder='Enter Your Email...' />
            <input className='inputTags mt' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UserForm;