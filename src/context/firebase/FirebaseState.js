import React, { useReducer } from 'react'
import axios from 'axios'

import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';

import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from '../types';

import { useAuth } from '../../hooks/userAuth'

const url = process.env.REACT_APP_FIREBASE_DB_URL;

export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: []
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const { token, userId } = useAuth();

    const fetchNotes = async (json) => {
        const resault = await axios.get((url) + '/notes/' + json.id + '.json?auth=' + json.token);

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

        const resault = await axios.post((url) + '/notes/' + userId + '.json?auth=' + token, note);

        const payload = {
            ...note,
            id: resault.data.name
        }

        dispatch({
            type: ADD_NOTE,
            payload
        })
    }

    const removeNote = async id => {
        await axios.delete((url) + '/notes/' + userId + '/' + (id) + ".json?auth=" + token);

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