import React, { useReducer } from 'react'
import axios from 'axios'


import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../types';

import { useAuth } from '../../hooks/userAuth'

const url = "https://dailyroutine-97a3e-default-rtdb.europe-west1.firebasedatabase.app";
const key = "HDTxtd6t1xok3MO5rLrjkPB2OIsTFMFjFB31W4ir";

export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: []
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const { token, id } = useAuth();

    const fetchNotes = async () => {
        const resault = await axios.get((url) + '' + '/notes.json');
        // console.log("token, id");
        const payload = Object.keys(resault.data).map(key => {
            return {
                ...resault.data[key],
                id: key
            }
        })

        dispatch({
            type: FETCH_NOTES,
            payload
        })
    }

    const addNote = async title => {
        const note = {
            title
        }

        const resault = await axios.post((url) + '/notes.json', note);

        console.log('addNote', resault.data);

        const payload = {
            ...note,
            id: resault.data.name
        }

        dispatch({
            type: ADD_NOTE,
            payload: id
        })
    }

    const removeNote = async id => {
        await axios.delete((url) + '/notes/' + (id) + ".json");

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            addNote, removeNote, fetchNotes,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}