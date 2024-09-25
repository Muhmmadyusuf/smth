import React, { useState } from 'react';
import "./index.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='smth'>

        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">Smth <code>Muhammadyusuf</code> </h1>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About us</a></li>
                    <li className="nav-item"><a href="#services">Menu</a></li>
                    <li className="nav-item"><a href="#contact">Blog</a></li>
                    <li className="nav-item"><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
        
        </div>

    );
};

export default Navbar;