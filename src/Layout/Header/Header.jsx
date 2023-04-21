import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const arrowLeft = `<`;
    const arrowRight = `/>`;
    return (
        <div>
            <div id='headerTop' className="heade-section flex justify-between items-center bg-indigo-300 py-3 px-2">
                <div className="site-icon">
                    <h1 className=' select-none md:text-3xl sm:text-2xl text-white font-sans font-bold'>{arrowLeft}Pro<span className=' text-indigo-500'>Quiz {arrowRight}</span></h1>
                </div>
                <div className='link-section text-base font-medium'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                    <NavLink to={'/statistics'} >Statistic</NavLink>
                    <NavLink to={'/charts'} >Chart</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;