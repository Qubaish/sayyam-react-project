import react, { useState, useEffect } from 'react';
import './nav.css'



const Nav = ({ chairName }) => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('Sayyam');

    useEffect(() => {
        setName(chairName);
    }, []);

   

    const handleClick = () => {
        setCounter(counter + 1);
        const myName = name === 'Sayyam' ? "Qubaish": "Sayyam";
        setName(myName)
        console.log('hello g')
    }

    return (
        <div>
            <div className="nav">My Nav Bar</div>
        </div>
    )
}

export default Nav;

// state, props, useEffect, import, export