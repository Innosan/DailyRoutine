import '../style/ToDoList.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function ToDoList({ notes, onRemove }) {
    return (
        <TransitionGroup component="div" className='todo-list'>
            {notes.map(note => (
                <CSSTransition key={note.id} classNames={"note"} timeout={700}>
                    <div className='todo-card'>
                        <label>
                            <input type="checkbox" name="todo-check" id="todo-status" className='todo-check' />
                            <span className='todo-check'></span>
                        </label>
                        <p className='todo-description'>{note.title}</p>
                        <button className='todo-delete-btn' onClick={() => onRemove(note.id)}>&times;</button>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

export default ToDoList;