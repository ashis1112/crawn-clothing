import React from 'react'
import Forminput from '../form-input/forminput'
import Custombutton from '../custom-button/custom-button'
import './signin.scss'

import {signwithgoogle} from '../../firebase/firebase.utils'
class Signin extends React.Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        this.setState({email:"",password:""})
    }
    handlechange=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})

    }
    render(){
        return(
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handlesubmit}>
                    <Forminput type="email" 
                    name="email" 
                    value={this.state.email} 
                    handlechange={this.handlechange}
                    label='email'
                    required />
                    <Forminput type="password"
                     name="password" 
                     handlechange={this.handlechange} 
                     value={this.state.password} 
                     label='password'
                     required />
                    <div className='buttons'>
                    <Custombutton type="submit">Sign in</Custombutton>
                    <Custombutton onClick={signwithgoogle} isGoogle >Sign in with google</Custombutton>
                    </div>
                </form>
            </div>

        )
    }
}

export default Signin