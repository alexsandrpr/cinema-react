import React from 'react';
import '../components/Header.css';
import IconsFacebook from '../img/facebook.png';
import IconsInstagram from '../img/instagram.png';
import IconsTwitter from '../img/twitter.png';
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
                        <a href='#'><img src={IconsFacebook} className='icons__facebook' /></a>
                    </li>
                    <li className='components__item'>
                        <a href='#'><img src={IconsInstagram} className='icons__instagram' /></a>
                    </li>
                    <li className='components__item'>
                        <a href='#'><img src={IconsTwitter} className='icons__twitter' /></a>
                    </li>
                </ul>
            </div>
        </header>
    )
};


export default Header;