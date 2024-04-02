import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import SobreMim from "./Pages/SobreMim";
import Erro404 from "./Pages/Erro404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobre_mim' element={<SobreMim />} />
          <Route path='*' element={<Erro404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
