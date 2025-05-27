import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Lista de Livros</NavLink>
      <NavLink to='/mylist'>Minha Lista</NavLink>
    </div>
  );
};

export default NavBar;
