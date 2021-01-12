import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <header style={header}>
            <ul style={listStyle}>
                <li style={listItemStyle}>
                    <Link style={linkStyle} to='/'>HOME</Link>
                </li>
                <li style={listItemStyle}>
                    <Link style={linkStyle} to='/add'>ADD NEW STUFF</Link>
                </li>
                <li style={listItemStyle}>
                    <Link style={linkStyle} to='/about'>ABOUT US</Link>
                </li>
            </ul>
        </header>
    );
}

const header = {
    height: '90px',
    background: 'black',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center'
};

const listStyle ={
    display: 'inline'
}

const listItemStyle = {
    display: 'inline',
    margin: '20px',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold'
}

export default NavBar;