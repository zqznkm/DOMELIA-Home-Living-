import { UserRound, ShoppingBag, Search } from 'lucide-react';
import "../styles/Header.css"

function Header() {
    return (
        <header className="header">
            <div className="headerInner container">

                <a href="/" className="headerLogo">
                    DOMELIA
                    <span>HOME & LIVING</span>
                </a>

                <nav className="headerNav">
                    <a href="/">Главная</a>
                    <a href="#catalog">Каталог</a>
                    <a href="#about">О бренде</a>
                    <a href="#delivery">Доставка и оплата</a>
                </nav>

                <div className="headerActions">
                    <button
                        type="button"
                        className="headerIcon"
                        aria-label="Поиск"
                    >
                        <Search />
                    </button>

                    <button
                        type="button"
                        className="headerIcon"
                        aria-label="Личный кабинет"
                    >
                        <UserRound />
                    </button>

                    <button
                        type="button"
                        className="headerIcon"
                        aria-label="Корзина"
                    >
                        <ShoppingBag />
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Header;