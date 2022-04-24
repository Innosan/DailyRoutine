import React, { useContext, useEffect } from 'react';

import '../style/Home.css';

import InputForm from "../components/InputForm.js";
import ToDoList from '../components/ToDoList.js';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
    const { notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])
    return (
        <div className="Home">
            <main className="main-window">
                <div className="main-nav-menu">
                    <a href="#">Global ToDo</a>
                    <a href="#">Crafting Writs</a>
                    <a href="#">Vet Dungeons</a>
                    <a href="#">Daily Dungeon</a>
                    <a href="#">Summary</a>
                    <a href="#">Useful links</a>
                </div>
                <div className='todo-window'>
                    <InputForm />
                    <ToDoList notes={notes} onRemove={removeNote}></ToDoList>
                </div>
            </main>
        </div>
    );
}