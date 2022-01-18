import React from 'react';
import './custam-button.style.scss';

const Custambutton = ({children,isGoogleSignin,inverted,...otherprops})=>{

    return(

<button className={`${inverted ? 'inverted':''} ${isGoogleSignin ? 'google-sign-in':''} custom-button`} {...otherprops}>
    {children}
</button>

)}

export default Custambutton;