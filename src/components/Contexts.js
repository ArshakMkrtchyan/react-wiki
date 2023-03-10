import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

export default function Contexts({ children }) {

    //login
    const [style, setStyle] = useState('block')
    const [name, setname] = useState()
    const [surname, setsurname] = useState()
    const [mail, setmail] = useState()
    const [password, setpassword] = useState()
    const [stay, setStay] = useState(false)

    function handelclick() {
        if (name === 'name' && surname === 'surname' && mail === 'mail' && password === 'password') {
            setStyle('none')
            setnewstyle('block')
            localStorage.setItem('User', JSON.stringify({
                name: name,
                surname: surname,
                mail: mail,
                password: password
            }));
        }


    }
    // console.log(stay);


    //searchPanel
    const [info, setinfo] = useState()
    const [input, setinput] = useState('Armenia')
    const [search, setsearch] = useState()
    const [newstyle, setnewstyle] = useState('none')

    useEffect(() => {
        axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${input}`).then(res => {
            setinfo(res.data.query.search)
            setinput('')
        })
    }, [search, stay])

    console.log(info);

    const values = {
        //login
        style,
        setStyle,
        name,
        setname,
        surname,
        setsurname,
        mail,
        setmail,
        password,
        setpassword,
        handelclick,

        stay,
        setStay,

        //searchPanel
        info,
        setinfo,
        input,
        setinput,
        search,
        setsearch,
        newstyle,
        setnewstyle
    }

    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}
