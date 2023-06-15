import React from "react";
import './signPage.css'
import google_icon from "../images/google_icon.png"


const SignUpPage = () => {
    return (
        <div className="signUp_container">
            <h1 className="main_h1">Create Your Account</h1>
            <div class="login-card">
                 <form>
                     <input type="text" placeholder="Username" />
                     <input type="text" placeholder="Email" />
                     <input type="password" placeholder="Password" />
                     <input type="password" placeholder="Confirm Password" />
                     <button type="submit">Sign Up</button>
                 </form>
            </div>
            <h1>OR</h1>
            <div className="google_signin">
                <img src={google_icon} alt="GOOGLE_ICON"/>
                <h5>Sign in with Google</h5>
            </div>
            <div className="signin_text">
                <h4>Already have an account? <span>Sign in</span></h4>
            </div>
            
        </div>
    )
}

export default SignUpPage;