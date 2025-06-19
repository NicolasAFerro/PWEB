import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=' bg-white p-8 shadow-md py-4 px-8"'>
      <div className='flex items-center justify-between'>
        <h1 className='"text-lg font-semibold text-gray-800 '>
          Trabalho Final Pweb
        </h1>
        <div className='flex space-x-6'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `text-gray-700 hover:font-semibold hover:text-black transition ${
                isActive ? 'font-semibold text-black' : ''
              }`
            }
          >
            Lista de Livros
          </NavLink>
          <NavLink
            to='/mylist'
            className={({ isActive }) =>
              `text-gray-700 hover:font-semibold hover:text-black transition ${
                isActive ? 'font-semibold text-black' : ''
              }`
            }
          >
            Minha Lista
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
