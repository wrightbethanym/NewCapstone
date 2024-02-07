import React, {useState, useEffect} from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';

export default function SignIn ({setToken, token}) {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate(); 
    useEffect(()=>{
        if(token){
            navigate("/")
        }
    },[token])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {"Content-Type": "application/json"}
        })
            .then(res=>res.json())
            .then(json=>{console.log(json);
            setToken(json.token);
            localStorage.setItem("token", json.token);
            })
    };

    return (
        <>
            <div className='container'>
                <div className="form-element">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input value ={username} onChange={(e)=>setUsername(e.target.value)} type='text' id='username' name='username' />
                        <br />
                        <label htmlFor='password'>Password:</label>
                        <input value ={password} onChange={(e)=>setPassword(e.target.value)}type='password' id='password' name='password' />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
    