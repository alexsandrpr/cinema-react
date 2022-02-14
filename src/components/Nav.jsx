import React from 'react';
import '../components/Nav.css';



const Nav = () => {
    return(

      <nav class="header__menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a href="#"class="menu__item__link">Schedule</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__item__link">Movies</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__item__link">Save</a>
                    </li>
                    <li class="menu__item">
                        <a href="#" class="menu__item__link">Contact</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;