import '../style/ToDoList.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function ToDoList({ notes, onRemove }) {
    return (
        <TransitionGroup component="div" className='todo-list'>
            {notes.map(note => (
                <CSSTransition classNames={"note"} key={note.id} timeout={400}>
                    <div className='todo-card'>
                        <label>
                            <input type="checkbox" name="todo-check" id="todo-status" className='todo-check' />
                            <span className='todo-check'></span>
                        </label>
                        <p id='todo-description' className='todo-description'>{note.title}</p>
                        <button className='todo-delete-btn' onClick={() => onRemove(note.id)}>&times;</button>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

// function makeDone() {
//     document.getElementById('todo-description').style.textDecoration = "line-through";
// }

export default ToDoList;