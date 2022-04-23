import '../style/Home.css';

import Header from "../components/Header.js";
import InputForm from "../components/InputForm.js";

export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main className="MainWindow">
                <div className="MainNavMenu">
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