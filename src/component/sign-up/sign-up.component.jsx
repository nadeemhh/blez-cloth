import React from 'react';

import Forminput from '../form-input/form-input-component';
import Custambutton from '../custam-button/custam-button.component';

import {auth,createuserprofiledocument} from '../../firebase/firebase.utiles';

import './sign-up.stye.scss';

class Signup extends React.Component{

constructor(){
super();

this.state ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

}

handleSubmit = async event => {
    
    event.preventDefault();

    const {displayName,email,password,confirmPassword}=this.state;
    console.log(password)
    if(password !== confirmPassword){
        alert('unmach');
        return;
    }

try{

const {user}=await auth.createUserWithEmailAndPassword(email,password);
createuserprofiledocument(user,{displayName});

this.setState({displayName:'',
email:'',
password:'',
confirmPassword:''});

}catch(error){
console.log(error)
}

}

handleChange = event => {
    const {name,value}=event.target;
    this.setState({[name]:value});

    
    
}

render(){
    
    const {displayName,email,password,confirmPassword}=this.state;
    return(

<div className='sign-up'>
    
<h2 className='title'>i dont havr an account</h2>
<span>signup with your email and password</span>
<form className='sign-up-form' onSubmit={this.handleSubmit}>

<Forminput type='text' name='displayName' value={displayName} label='displayName'  onChange={this.handleChange} required />



<Forminput type='email' name='email' value={email} label='email' onChange={this.handleChange} required />



<Forminput type='password' name='password' value={password} label='password'  onChange={this.handleChange} required />



<Forminput type='password' name='confirmPassword' value={confirmPassword} label='confirmPassword'  onChange={this.handleChange} required />

<Custambutton type ='submit'> sign up</Custambutton>


</form>
</div>

    )
}

}

export default Signup;

