import React from 'react';
import './sign-in-sign-up.scss';
import Signin from '../../component/sihn-in/sihn-in-component';
import Signup from '../../component/sign-up/sign-up.component';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <Signin />
    <Signup />
    </div>
);

export default SignInSignUp;