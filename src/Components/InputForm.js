import { useState } from 'react';

import '../style/InputForm.css';

import plus from '../icons/Plus.png'

function InputForm() {
    // const [userInput, setUserInput] = useState('');

    return (
        <form className='InputForm'>
            <input
                // value={userInput}
                className="input-field"
                type="text"
                id="input-task"
                placeholder='Task...'
            />
            <button className='add-task-btn'>
                <img src={plus} alt="" />
            </button>
        </form>
    );
}

export default InputForm;