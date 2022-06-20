import '../style/BurgerMenu.css';

function BurgerMenu() {
    return (
        <button className="burger-menu" onClick={() => { alert("Ну не работает пока, емае") }}>
            <div className="first-bar"></div>
            <div className="second-bar"></div>
            <div className="third-bar"></div>
        </button>
    );
}

export default BurgerMenu;