import Botao from 'Components/Botao';
import style from './Erro404.module.css';
import erro404Imagem from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

const Erro404 = () => {
    const nevegacao = useNavigate();

    return (
        <>
            <div className={style.conteudoContainer}>
                <span className={style.texto404}>404</span>

                <h1 className={style.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={style.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={style.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div className={style.botaoContainer}
                    onClick={() => nevegacao(-1)}>

                    <Botao tamanho='lg' > Voltar </Botao>
                </div>

                <img className={style.imagemCachorro}
                    src={erro404Imagem}
                    alt='Cachorro usando óculos'
                />
            </div>
            <div className={style.espacoEmBranco}></div>
        </>

    )
}

export default Erro404;
