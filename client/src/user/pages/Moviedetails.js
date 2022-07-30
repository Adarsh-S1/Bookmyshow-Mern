import React from 'react'
import Aboutmovie from '../components/Aboutmovie';
import MoviedetailsBanner from '../components/MoviedetailsBanner';

const Moviedetails = () => {
 return (
   <div style={{ backgroundColor: "#f4f4f4" }}>
     <MoviedetailsBanner />
       <Aboutmovie />
   </div>
 );
}

export default Moviedetails