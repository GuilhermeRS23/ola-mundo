import Banner from "Components/Banner";
import { Outlet } from "react-router-dom";

const LayoutPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet/>
        </main>
    )
}

export default LayoutPadrao;
