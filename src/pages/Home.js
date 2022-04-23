import '../style/Home.css';

import InputForm from "../components/InputForm.js";

export const Home = () => {
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
                <InputForm />
            </main>
        </div>
    );
}

// export default Home;