import '../style/ToDoCard.css';

function ToDoList({ notes }) {
    return (
        <div className='todo-list'>
            {notes.map(note => (
                <div className='todo-card' key={note.id}>
                    <label>
                        <input type="checkbox" name="todo-check" id="todo-status" className='todo-check' />
                        <span className='todo-check'></span>
                    </label>
                    <p className='todo-description'>{note.description}</p>
                    <button className='todo-delete-btn'>&times;</button>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;