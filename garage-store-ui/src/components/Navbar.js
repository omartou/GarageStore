import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <header>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/add'>ADD NEW STUFF</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT US</Link>
                </li>
            </ul>
        </header>
    );
}

export default NavBar;