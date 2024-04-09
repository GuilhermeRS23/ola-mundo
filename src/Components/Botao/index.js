import style from './Botao.module.css';

const Botao = ({ children, tamanho }) => {
    return (
        <button className={`${style.botao} ${style[tamanho]}`} >
            {children}
        </button>
    )
};

export default Botao;
