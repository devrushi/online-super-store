import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
                email :'',
                password :''
            };
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''});
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
                   

                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        );
    }
}
    

export default SignIn;