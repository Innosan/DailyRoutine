import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../style/Header.css';
import account from '../icons/account.png';
import logout from '../icons/logout.png';

import BurgerMenu from "./BurgerMenu.js";

import { removeUser } from '../store/slices/userSlice'

function Header() {
    const dispatch = useDispatch();

    return (
        <header>
            <p className="logo-text">Daily Routine</p>
            <nav className="header-nav">
                <NavLink to="/">ToDo and Stuff</NavLink>
                <NavLink to={"/calc"}>Calculator</NavLink>
                <a href="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=64f9563444404bb8">LoFi</a>
            </nav>
            <NavLink to={"/signup"} className="create-account-btn">
                <img src={account} width="40px" height="40px" alt="" />
            </NavLink>
            <button className='logout-btn' onClick={() => dispatch(removeUser())}>
                <img src={logout} width="40px" height="40px"></img>
            </button>
            <BurgerMenu />
        </header>
    )
}

export default Header;