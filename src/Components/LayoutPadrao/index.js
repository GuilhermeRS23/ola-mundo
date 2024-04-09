import Banner from "Components/Banner";
import { Outlet } from "react-router-dom";

const LayoutPadrao = ({ children }) => {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    )
}

export default LayoutPadrao;
