import React, { useContext, useEffect } from 'react';

import '../style/Home.css';
import { deleteUser } from '../store/slices/userSlice'

import InputForm from "../components/InputForm.js";
import ToDoList from '../components/ToDoList.js';
import { FirebaseContext } from '../context/firebase/firebaseContext';

import { useAuth } from '../hooks/userAuth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const { notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    let navigate = useNavigate();

    const { isAuth, token, id } = useAuth();

    useEffect(() => {
        fetchNotes()
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
                    {/* <p>{token}</p>
                    <p>{id}</p> */}
                </div>
                <div className='todo-window'>
                    <InputForm />
                    <ToDoList notes={notes} onRemove={removeNote}></ToDoList>
                </div>
            </main>
        </div>
    ) : (
        navigate('/signin')
    );
}