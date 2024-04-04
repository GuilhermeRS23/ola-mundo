import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Erro404 from "./Pages/Erro404";
import Menu from "./Components/Menu";
import Rodape from "Components/Rodape";
import LayoutPadrao from "Components/LayoutPadrao";

const AppRoutes = () => {
  return (
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route patch="/" element={<LayoutPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='sobre_mim' element={<SobreMim />} />
          </Route>

          <Route path='*' element={<Erro404 />} />
        </Routes>

        <Rodape />
      </BrowserRouter>
  );
}

export default AppRoutes;
