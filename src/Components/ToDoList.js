import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components';

import '../style/ToDoList.css';

const ToDoCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 525px;
    height: 70px;
    border-radius: 23px;
    margin-bottom: 20px;

    @media screen and (max-width: 425px){
        width: 330px;
        height: 60px;
    }
`

function ToDoList({ notes, onRemove }) {
    return (
        <TransitionGroup component="div" className='todo-list'>
            {notes.map(note => (
                <CSSTransition classNames={"note"} key={note.id} timeout={400}>
                    <ToDoCard>
                        <label>
                            <input type="checkbox" name="todo-check" id="todo-status" className='todo-check' />
                            <span className='todo-check'></span>
                        </label>
                        <p id='todo-description' className='todo-description'>{note.title}</p>
                        <button className='todo-delete-btn' onClick={() => onRemove(note.id)}>&times;</button>
                    </ToDoCard>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}

export default ToDoList;