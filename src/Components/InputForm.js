import { useContext, useState } from 'react';

import 'style/InputForm.css';

import plus from 'icons/Plus.png'
import { FirebaseContext } from 'context/firebase/firebaseContext';

function InputForm() {
    const [value, setValue] = useState('');
    const firebase = useContext(FirebaseContext)

    let inputField = document.getElementById("input-task");

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim())
            setValue("");
            inputField.setAttribute("placeholder", "Task...")
        }
        else {
            inputField.setAttribute("placeholder", "Field is Empty!");
        }
    }

    return (
        <form className='InputForm' onSubmit={submitHandler}>
            <input
                className="input-field"
                type="text"
                id="input-task"
                placeholder='Task...'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className='add-task-btn'>
                <img src={plus} alt="" />
            </button>
        </form>
    );
}

export default InputForm;