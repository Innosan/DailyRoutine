import '../style/InputForm.css';

import plus from '../icons/Plus.png'

function InputForm() {
    return (
        <div className='InputForm'>
            <input className="input-field" type="text" name="input-task" id="input-task" />
            <button className='add-task-btn'>
                <img src={plus} alt="Add Task" />
            </button>
        </div>
    );
}

export default InputForm;