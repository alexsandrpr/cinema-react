import React from 'react';
import '../components/Header.css';
import IconsSearch from '../img/icons_search.png';
import IconsAccount from '../img/Account.png';
import HeaderLogo from '../img/header_logo.png';
import Slider from './Slider';


const Header = () => {
    return(
        <header className='header'>
            <a href='#'><img src={HeaderLogo} className='header__logo'/></a>
            <Slider />
            <div className='header__components'>
                <ul className='components__list'>
                    <li className='components__item'>
                        <a href='#'><img src={IconsSearch} className='icons__search' /></a>
                    </li>
                    <li className='components__item'>
                        <a href='#'><img src={IconsAccount} className='icons__account' /></a>
                    </li>
                </ul>
            </div>
        </header>
    )
};


export default Header;