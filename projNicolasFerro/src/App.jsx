import './App.css';

import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
function App() {
  return (
    <div className='bg-slate-300'>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default App;
