import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                email :'',
                password :''
            };
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        }catch(error){
            console.error(error);
        }
        
    }
    handleChange = event =>{
        const {value,name} = event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="email" name="email" handleChange={ this.handleChange } value={this.state.email} required/>
                   
                    <FormInput type="password" label="password" name="password" handleChange={ this.handleChange } value={this.state.password} required/>
                   
                    <div className="btn-signIn">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={ signInWithGoogle } googleSignIn> 
                    Sign In With Google 
                    </Button>
                    </div>
                    
                </form>
            </div>
        );
    }
}
    

export default SignIn;