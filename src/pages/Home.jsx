import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import '../pages/Home.css';


const Home = () => {
    return(
        <div className="wrapper">
        <Header />
        <Nav />
        </div>
    )    
};

export default Home;