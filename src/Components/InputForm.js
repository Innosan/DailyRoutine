import '../style/InputField.css';

import plus from '../icons/Plus.png'

function InputForm() {
    return (
        <div className='InputForm'>
            <label htmlFor="task-form"></label>
            <input className="TaskField" type="text" name="task-form" id="task-form" />
            <button className='AddTaskBtn'>
                <img src={plus} alt="" />
            </button>
        </div>
    );
}

export default InputForm;