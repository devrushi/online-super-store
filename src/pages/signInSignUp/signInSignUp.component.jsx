import React from 'react';
import './signInSignUp.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp =() => (
   <div className="signInandSignUp">
     <SignIn/>
     <SignUp/>
   </div>
    
);

export default SignInSignUp;