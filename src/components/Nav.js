import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const nav_li = [
    {name: 'Home', link: '/'},
    {name: 'Post', link: '/post'},
    {name: 'About', link: '/about'},
]

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <Link style={navStyle} className='h3-link' to='/'>
                <h3>RSearch</h3>
            </Link>
            <ul className="nav-links">
                {
                    nav_li.map(li =>
                        <Link style={navStyle} to={li.link} key={li.name}>
                            <li >{li.name}</li>
                        </Link>)
                }
            </ul>
        </nav>
    );
}

export default Nav;
