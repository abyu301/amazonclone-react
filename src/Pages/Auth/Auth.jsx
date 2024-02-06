import React from 'react'
import classes from './Auth.module.css'
import { Link } from 'react-router-dom'

function Auth() {
    return (
        <>
        <section className={classes.login}>
            {/* logo */}
            <Link><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322" alt="" />
            </Link>
            {/* form */}
            <div className={classes.login__container}>
                <h1>Sign In</h1>
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'/>
                    </div>
                    <div>
                    <label htmlFor="password">password</label>
                        <input type="password" id='password'/>
                    </div>
                    <button className={classes.login__signInButton}>Sign In</button>
                </form>
                {/* agreement */}
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please See our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
            </div>
        </section>
        </>
    )
}

export default Auth