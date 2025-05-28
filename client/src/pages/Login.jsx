import React, { useState } from 'react'

export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handlesubmit(event){
       event.preventDefault
    }

    return (
        <>
            <div>Login</div>
            <div>
                <form onSubmit={handlesubmit}>
                    <input type="email" placeholder='Email' value={email} onChange={(em)=> setEmail(em.target.value)} />
                    <input type="password" placeholder='password' value={password} onChange={(em)=>setPassword(em.target.value)} />
                    
                </form>
            </div>
        </>


    )
};
