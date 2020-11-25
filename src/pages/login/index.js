import React, { useState } from 'react'
import Fetch from '../../utils/Fetch'
import { Alert } from '../../utils/Notification'
import { login } from '../../Endpoint'
import './login.css'

const Login = (props) => {

    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === '') return Alert('Username tidak boleh kosong')
        if (password === '') return Alert('Password tidak boleh kosong')
        Fetch.Post(login, { username, password })
            .then(res => {
                if (res.status) {
                    localStorage.setItem('session', JSON.stringify(res.data))
                    props.history.push('/')
                } else {
                    localStorage.removeItem('session')
                    Alert(res.message)
                }
            })
            .catch(err => {
                localStorage.removeItem('session')
                Alert(err)
            })
    }

    if (localStorage.getItem('session')) {
        props.history.push('/')
    }

    return (
        <div className="bck">
            <div className="container-login">
                <form className="form-signin" onSubmit={handleSubmit}>
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal text-white">POS</h1>
                    </div>
                    <div className="form-label-group">
                        <input type="text" id="username" name="username" className="form-control form-control-lg" placeholder="username" value={username} onChange={e => setusername(e.target.value)} autoFocus />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-label-group">
                        <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn btn-lg btn-danger btn-block" type="submit">Login</button>
                    <p className="mt-5 mb-3 text-muted text-center">Alright Reserved {new Date().getFullYear()}</p>
                </form>
            </div>
        </div>
    )
}
export default Login