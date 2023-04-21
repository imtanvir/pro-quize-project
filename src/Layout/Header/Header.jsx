import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const arrowLeft = `<`;
    const arrowRight = `/>`;

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        document.body.classList.toggle('overflow-x-hidden');
    };

    return (
        <div>
            <div id='headerTop' className="heade-section flex justify-between items-center bg-indigo-300 py-3 px-2 relative">
                <div className="site-icon">
                    <h1 className=' select-none md:text-3xl sm:text-2xl text-white font-sans font-bold'>{arrowLeft}Pro<span className=' text-indigo-500'>Quiz {arrowRight}</span></h1>
                </div>
                <div className='link-section text-base font-medium md:flex hidden'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                    <NavLink to={'/statistics'} >Statistic</NavLink>
                    <NavLink to={'/charts'} >Chart</NavLink>
                    <NavLink to={'/blog'}>Blog</NavLink>
                </div>
                <div className="block md:hidden absolute right-0 top-0 mr-2">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-indigo-500 border-indigo-500 hover:text-white hover:bg-indigo-500 hover:border-transparent"
                        onClick={handleMenuClick}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
            {showMenu && (
                <div className="md:hidden flex flex-col items-center justify-center w-full bg-indigo-300">
                    <NavLink to={'/'} className="py-3 sm:py-1 rounded-sm sm:px-6 text-lg font-medium text-white hover:bg-indigo-500 hover:text-white" onClick={handleMenuClick}>Home</NavLink>
                    <NavLink to={'/statistics'} className="py-3 text-lg font-medium text-white hover:bg-indigo-500 hover:text-white" onClick={handleMenuClick}>Statistic</NavLink>
                    <NavLink to={'/charts'} className="py-3 text-lg font-medium text-white hover:bg-indigo-500 hover:text-white" onClick={handleMenuClick}>Chart</NavLink>
                    <NavLink to={'/blog'} className="py-3 text-lg font-medium text-white hover:bg-indigo-500 hover:text-white" onClick={handleMenuClick}>Blog</NavLink>
                </div>
            )}
        </div>
    );
};

export default Header;
