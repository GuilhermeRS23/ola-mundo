import { NavLink } from "react-router-dom";
import style from "./MenuLinks.module.css";

const MenuLink = ({ children, to }) => {
    return (
        <NavLink className={({ isActive }) =>
            `${style.link}
            ${isActive ? style.linkDestacado : ""} `}
            to={to}
            end 
            >
            {children}
        </NavLink>
    )
}

export default MenuLink;
