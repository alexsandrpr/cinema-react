import React from 'react';
import '../components/Header.css';
import HeaderSlide_1 from '../img/header_slide_1.jpg';
import IconsSearch from '../img/icons_search.png';
import IconsAccount from '../img/Account.png';
import HeaderLogo from '../img/header_logo.png';


const Header = () => {
    return(
        <header className='header'>
            <a href='#'><img src={HeaderLogo} className='header__logo'/></a>
        <div className='header__photo'>
             <img src={HeaderSlide_1} className='header__slide-1'/>
        </div>
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