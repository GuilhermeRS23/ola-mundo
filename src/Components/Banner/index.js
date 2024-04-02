import style from "../Banner/Banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

const Banner = () => {
    return (
        <div className={style.banner}>
            <div>
                <h1 className={style.titulo}>
                    Hello, World !
                </h1>

                <p className={style.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Guilherme Rosa da Silva, estudante de Front-end na Alura. Aqui compartilho vários projetos, sempre buscando aprenda algo novo.
                </p>
            </div>

            <div className={style.imagens}>
                <img className={style.circuloColorido} src={circuloColorido}
                    aria-hidden={true}
                />

                <img className={style.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Guilherme"
                />
            </div>
        </div>
    )
}

export default Banner;
