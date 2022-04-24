import '../style/Home.css';

import InputForm from "../components/InputForm.js";
import ToDoCard from '../components/ToDoCard';

export const Home = () => {
    const notes = new Array(3)
        .fill('')
        .map((_, i) => ({ id: i, description: 'Note ' + (i + 1), completed: true }))
    return (
        <div className="Home">
            <main className="main-window">
                <div className="main-nav-menu">
                    <a href="#">Global ToDo</a>
                    <a href="#">Crafting Writs</a>
                    <a href="#">Vet Dungeons</a>
                    <a href="#">Daily Dungeon</a>
                    <a href="#">Summary</a>
                    <a href="#">Useful links</a>
                </div>
                <div className='todo-window'>
                    <InputForm />
                    <ToDoCard notes={notes}></ToDoCard>
                </div>
            </main>
        </div>
    );
}

// export default Home;