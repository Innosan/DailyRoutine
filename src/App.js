import "./style/App.css";
import BurgerMenu from "./Components/BurgerMenu.js";
import InputForm from "./Components/InputForm.js";

import account from '../src/icons/account.png'

function App() {
  return (
    <div className="App">
      <header>
        <p className="LogoText">Daily Routine</p>
        <nav className="HeaderNav">
          <a href="#">ToDo and Stuff</a>
          <a href="#">Calculator</a>
          <a href="#">LoFi</a>
        </nav>
        <a href="#" className="CreateAccountBtn">
          <img src={account} width="40px" height="40px" alt="" />
        </a>
        <BurgerMenu />
      </header>
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

export default App;
