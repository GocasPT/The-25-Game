import Logo from '/the25game-logo.svg';
import './header.css'

function Header() {
    return (
        <header>
            <img className='logo' src={Logo} alt="The 25 Game Logo" />
            <h1 className='title'>The 25 Game</h1>
        </header>
    );
}

export default Header;