import ModeloPost from "Components/ModeloPost";
import style from './SobreMim.module.css';
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png"

const SobreMim = () => {
    return (
        < ModeloPost
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >

            <h3 className={style.subtitulo}>
                Olá, eu sou Guilherme!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Guilherme"
                className={style.fotoSobreMim}
            />

            <p className={style.paragrafo}>
                Olá, meu nome é Guilherme Rosa da Silva, moro atualmente em Nova Venécia - ES e estou me profissionalizando na área de Programação, tanto na parte de Front e Back-end. Essa vontade de aprender sobre programação surgiu a pouco tempo e atualmente estou estudando usando a plataforma de cursos da Alura, onde venho me aperfeiçoando a cada dia, caso queira informações mais completas sobre minha evolução na área da Programação, lhe recomendo acessar meu Linkedin .
            </p>
            <p className={style.paragrafo}>

                O desejo de aprender programação despertou recentemente e assim venho me aperfeiçoando cada dia mais, tendo de lidar com trabalho e estudos, porém, minha rotina não se resumi em apenas trabalho e estudos, claro que no tempo livre meus principais hobbies e lazer são jogar vídeo game, assistir filmes, séries e animes, gosto muito de Formula 1 e futebol de uma forma geral tanto acompanhando ou praticando mesmo.
            </p>

        </ ModeloPost>
    )
}

export default SobreMim;
