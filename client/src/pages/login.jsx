import React, { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext.js'

const Login = () =>{
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [err, setErr] = useState(null)
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const handleChange = e =>{
        e.preventDefault()
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    // console.log(inputs)

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            await login(inputs)
            navigate("/")
        } catch (err) {
            console.log(err);
            setErr(err.response.data)
        }
    }
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
                <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have any account? <Link to ="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login