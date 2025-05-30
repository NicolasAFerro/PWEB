import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=' bg-white p-8 shadow-2xl'>
      <div className=' grid grid-cols-3'>
        <h1 className='text-md font-bold '>Trabalho Final Pweb</h1>
        <div className='border-2 flex gap-x-8 col-span-2'>
          <NavLink to='/' className='hover:font-bold duration-200'>
            Lista de Livros
          </NavLink>
          <NavLink to='/mylist' className='hover:font-bold  duration-200'>
            Minha Lista
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
