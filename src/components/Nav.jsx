import React from 'react';
import NavState from '../components/navState';
import MainMenu from '../components/MainMenu';


const Nav = () => {
    return(
        <NavState>
            <MainMenu />
        </NavState>
    );
}

export default Nav;