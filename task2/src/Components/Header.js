import React from 'react';
import './Header.css';
import {user} from './Cards';


const Header = () => {
    return(
        <>
            <div className='head'>
            <h1>TechShop </h1>
            <h2>Employees</h2>
            <button className="get" onClick={user}>Get Employees</button>
            
            </div>
        </>
    );
}

export default Header;