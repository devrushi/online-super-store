import React from 'react';
import './button.styles.scss';

const Button = ({children,googleSignIn,...otherProps}) =>(
    <button className={`${googleSignIn ?'google-sign-in' :''} button`} {...otherProps}>
        {children}
    </button>

);

export default Button;