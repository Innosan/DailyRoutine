import React, { useContext, useEffect } from 'react';

import '../style/Home.css';
import { removeUser, setUser } from '../store/slices/userSlice'

import InputForm from "../components/InputForm.js";
import ToDoList from '../components/ToDoList.js';
import { FirebaseContext } from '../context/firebase/firebaseContext';

import { useAuth } from '../hooks/userAuth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const { notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    const user = localStorage.getItem("user");
    let json = JSON.parse(user);

    const { userId, email, isAuth } = useAuth();

    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (json != null || isAuth) {
            dispatch(setUser({
                email: json.email,
                id: json.id,
                token: json.token,
                refreshToken: json.refreshToken,
            }));
            fetchNotes(json)
        }
    }, [])

    return isAuth ? (
        <div className="Home">
            <main className="main-window">
                <div className="main-nav-menu">
                    <a href="#">Global ToDo</a>
                    <a href="#">Crafting Writs</a>
                    <a href="#">Vet Dungeons</a>
                    <a href="#">Daily Dungeon</a>
                    <a href="#">Summary</a>
                    <a href="#">Useful links</a>
                    <button onClick={() => dispatch(removeUser())}>Log Out from {email}</button>
                </div>
                <div className='todo-window'>
                    <InputForm />
                    <ToDoList notes={notes} onRemove={removeNote}></ToDoList>
                </div>
            </main>
        </div>
    ) : navigate("/signin");
}