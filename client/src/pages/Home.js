import React from 'react'
import { useAppContext } from '../context/appContext';

const Home = () => {
  const {toggleSidebar,showSidebar}=useAppContext()
  return (
    <div onClick={!showSidebar ? toggleSidebar : console.log()}>Home</div>
  );
}

export default Home