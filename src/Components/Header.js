import { NavLink } from 'react-router-dom';

import '../style/Header.css';
import account from '../icons/account.png';

import BurgerMenu from "./BurgerMenu.js";

function Header() {
    return (
        <header>
            <p className="logo-text">Daily Routine</p>
            <nav className="header-nav">
                <NavLink to="/">ToDo and Stuff</NavLink>
                <NavLink to={"/calc"}>Calculator</NavLink>
                <a href="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=64f9563444404bb8">LoFi</a>
            </nav>
            <a href="#" className="create-account-btn">
                <img src={account} width="40px" height="40px" alt="" />
            </a>
            <BurgerMenu />
        </header>
    )
}

export default Header;