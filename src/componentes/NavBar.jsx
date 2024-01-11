import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='flex flex-row bg-corM1 w-[100%] shadow-lg h-[80px] items-center justify-between '>
            <ul className='flex flex-row items w-[400px] justify-between mx-[50px] '>
                <Link to={'/'} className='buttonNav  '>
                    Home
                </Link>
                
                <Link to={'/post'} className='buttonNav '>
                    Post
                </Link>
                <Link to={'/patch'} className='buttonNav '>
                    Patch
                </Link>
                <Link to={'/get'} className='buttonNav '>
                    Get
                </Link>
            </ul>
        </nav>
    );
};
export default NavBar;
