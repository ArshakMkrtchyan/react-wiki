import React, { useContext } from 'react'
import { MyContext } from './Contexts';
import wikiLogo from './wikiLogo.png'

export default function SearchPanel() {

    const searchVal = useContext(MyContext);

    function handleout() {
        localStorage.removeItem('User')
    }

    return (
        <div className="SearchPanel" style={{ display: searchVal.newstyle }}>
            <form> <button onClick={handleout} className='logOut'>Log out</button></form>
            <div className='searchFirst'>
                <h2>Search Wikipedia</h2>
                <img src={wikiLogo} alt="" className='wikiLogo' />
                <div className='searching'>
                    <input value={searchVal.input} type='text' placeholder='search' onChange={(e) => { searchVal.setinput(e.target.value) }} />
                    <button onClick={() => searchVal.setsearch(searchVal.input)}>search</button>
                </div>
            </div>
            <div className='searchSecond'>
                {searchVal.info ? searchVal.info.map(inf => (
                    <div className='box' key={inf.pageid}>
                        <h3>{inf.title}</h3>
                        <a href={`https://en.wikipedia.org/?curid=${inf.pageid}`}>{inf.snippet}</a>
                    </div>
                )) : null}
        </div>
        </div >

    );
}
