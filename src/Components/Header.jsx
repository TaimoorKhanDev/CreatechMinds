import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsMenuButtonWide } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className='bg-dark'>
        {/* For large devices */}
        <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
          {/* Make Arino logo a clickable link */}
          <a href='#home' className='text-white text-3xl font-bold font-serif'>
            <span className='text-orange'>CreaTech</span>Minds
          </a>
          {/* Menu items for large devices */}
          <ul className='hidden sm:flex text-white items-center space-x-8 uppercase'>
            <Nav to='#home' label='Home' />
            <Nav to='#about' label='About' />
            <Nav to='#services' label='Services' />
            <Nav to='#portfolio' label='Portfolio' />
            <Nav to='#blog' label='Blog' />
            <Nav to='#contact' label='Contact' />
          </ul>
          {/* Mobile menu button */}
          <div className='sm:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-white text-2xl focus:outline-none'
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <FaXmark className='h-6 w-6' /> : <BsMenuButtonWide className='h-6 w-6' />}
            </button>
          </div>
        </div>
        {/* For small devices */}
        {isMobileMenuOpen && (
          <div className='sm:hidden bg-dark text-white p-4'>
            {/* Mobile menu items */}
            <ul className='flex flex-col space-y-4 uppercase'>
              <Nav to='#home' label='Home' onClick={toggleMobileMenu} />
              <Nav to='#about' label='About' onClick={toggleMobileMenu} />
              <Nav to='#services' label='Services' onClick={toggleMobileMenu} />
              <Nav to='#portfolio' label='Portfolio' onClick={toggleMobileMenu} />
              <Nav to='#blog' label='Blog' onClick={toggleMobileMenu} />
              <Nav to='#contact' label='Contact' onClick={toggleMobileMenu} />
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

const Nav = ({ to, label, onClick }) => {
  const isActive = useLocation().pathname === to;

  return (
    <li className={`transition duration-300 ease-in-out ${isActive ? 'text-orange' : 'text-white'} hover:text-orange hover:bg-gray-700 hover:text-orange px-4 py-2 rounded-full cursor-pointer`}>
      <a href={to} onClick={onClick}>
        {label}
      </a>
    </li>
  );
};

export default Header;
