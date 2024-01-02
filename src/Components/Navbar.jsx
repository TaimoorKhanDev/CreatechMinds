import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);

    const toggleMenu = ()=> {
        setIsMenuOpen (!isMenuOpen);
    }

    // for when scrolling, navbar will be sticky
    useEffect (()=> {
          const handleScroll = ()=> {
            if(window.scrollY >100){
                setIsSticky(true);
            }
            else{(false);
            }
          };
          window.addEventListener('scroll', handleScroll);

          return() => {
            window.addEventListener('scroll', handleScroll);
          };
    });
       
  return (
    <header>
        <nav>
            {/* {for large devices} */}
            <div className='flex items-center justify-between px-12'>
                <Link to="/" className='text-white text-3xl font-bold'> <span className='text-orange'>A</span>rino </Link>
                {/* {menu items for large devices} */}
                <ul className='text-white'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;
