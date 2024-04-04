import style from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

const Rodape = () => {
    return (
        <footer className={style.rodape}>
            <MarcaRegistrada />
            Desenvolvido por Alura.
        </footer>
    )
}

export default Rodape;
