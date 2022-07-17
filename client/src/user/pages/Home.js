import React from 'react'
import Navigationbar from "../components/Navigationbar";
import Homebanner from "../components/Homebanner";
import Recommended from '../components/Recommended';
import Ads from '../components/Ads';
import Streambanner from '../components/Streambanner';
import Otherlanguages from '../components/Otherlanguages';
import Streammovies from '../components/Streammovies';
import Entertainment from '../components/Entertainment';
const Home = () => {

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Homebanner />
      <Ads />
      <Recommended />
      <Navigationbar />
      <Streambanner />
      <Entertainment />
      <Streammovies />
      <Otherlanguages />
    </div>
  );
}

export default Home