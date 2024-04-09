import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Erro404 from "./Pages/Erro404";
import Menu from "./Components/Menu";
import Rodape from "Components/Rodape";
import LayoutPadrao from "Components/LayoutPadrao";
import Post from "Pages/Post";
import ScrollToTop from "Components/ScrollToTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<LayoutPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre_mim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
