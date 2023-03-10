import React, { useContext } from 'react'
import { MyContext } from './Contexts';
import Login from './Login';
import SearchPanel from './SearchPanel';


export default function Container() {
    const stayVal = useContext(MyContext);
    if (localStorage.getItem('User')) {
        stayVal.stay = true
        stayVal.newstyle = 'block'
    } else {
        stayVal.stay = false
        stayVal.newstyle = 'none'
    }

    // console.log(stayVal.newstyle);

    return (
        <div>
            {stayVal.stay ? <SearchPanel /> : <Login />}
        </div>
    )
}
