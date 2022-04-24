import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types";

const handlers = {
    [ADD_NOTE]: (state, { payload }) => ({ ...state, notes: [...state.notes, payload] }),
    [FETCH_NOTES]: (state, { payload }) => ({ ...state, notes: payload }),
    [REMOVE_NOTE]: (state, { payload }) => ({ ...state, notes: state.notes.filter(note => note.id != payload) }),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}