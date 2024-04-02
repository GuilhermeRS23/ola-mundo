import style from "./Menu.module.css";
import MenuLink from "./MenuLinks";

const Menu = () => {
    return (
        <header>
            <nav className={style.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobre_mim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
};

export default Menu;
