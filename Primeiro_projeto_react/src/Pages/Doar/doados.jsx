import S from './doados.module.scss';
import livro from '../../assets/images/livro.png'

export default function Doados() {
    return (
        <>
            <section className={S.boxDoados}>
                <h2>Livros doados</h2>
                <div className={S.boxLivro}>
                    <img src={livro} alt="Livro" />
                    <p> O protagonista <br /> Susanne Andrade<br /> Ficção</p>
                </div>
            </section>
            
        </>
    );
}
