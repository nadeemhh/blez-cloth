import React from 'react';
import Forminput from '../form-input/form-input-component';
import Custambutton from '../custam-button/custam-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utiles';
import './sihn-in-style.scss';



class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state  = {
      email:'',
         password:''
        }
    }


    handlesubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state;

try{
await auth.signInWithEmailAndPassword(email,password);
this.setState({email:'',password:''});
}catch(error){
    console.log(error)
}

       
        
        }

   


handlechange = event => {
    const {value,name}= event.target;

    this.setState({[name]:value})
}

    render(){
        return(
            <div className='sign-in'>
                <h2> i already have an account</h2>
                <span>sign in with your email and passward</span>

                <form onSubmit={this.handlesubmit} >
<Forminput name='email' type="email" value={this.state.email} handlechange={this.handlechange} label='email' required/>


<Forminput name='password' type="password" value={this.state.password} handlechange={this.handlechange} label='passward' required />

<div className='buttons'>
<Custambutton type='submit'>sign in </Custambutton>
<Custambutton type='button' onClick={signInWithGoogle} isGoogleSignin>{' '}sign In With Google{' '}</Custambutton>
</div>

                </form>
            </div>
        )
    }

}

export default Signin;


