import React, { useContext } from 'react'
import { MyContext } from './Contexts';

export default function Login() {

    const loginVal = useContext(MyContext);

    return (
        <div className='login' style={{ display: loginVal.style }}>
            <div className='loginCont'>
                <h2>Login to Wikipedia</h2>
                <input type="text" value={loginVal.name} placeholder='name' onChange={(e) => { loginVal.setname(e.target.value) }} />
                <input type="text" value={loginVal.surname} placeholder='surname' onChange={(e) => { loginVal.setsurname(e.target.value) }} />
                <input type="email" value={loginVal.mail} placeholder='mail' onChange={(e) => { loginVal.setmail(e.target.value) }} />
                <input type="password" value={loginVal.password} placeholder='password' onChange={(e) => { loginVal.setpassword(e.target.value) }} />
                <button onClick={loginVal.handelclick}>log in</button>
            </div>
            <div className='aid'>
                <h3>Aid for log in</h3>
                <p>In name field type <span>name</span> </p>
                <p>In surname field type <span>surname</span> </p>
                <p>In mail field type <span>mail</span> </p>
                <p>In password field type <span>password</span> </p>
            </div>
        </div>
    )
}
