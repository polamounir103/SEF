import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginModel.css'
const LoginModel = () => {
    const navigate = useNavigate()
    return (
        <section className='login-model'>
            <div className='wrapper'>
                <button onClick={() => navigate('/')}>X</button>
                <div>
                    <p>Please login to view this page</p>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
        </section>
    )
}

export default LoginModel