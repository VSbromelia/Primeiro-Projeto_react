import S from './inicio.module.scss';
import inclusaoImg from '../../assets/images/inclusao.png';
import leituraImg from '../../assets/images/leitura.png';
import transformacaoImg from '../../assets/images/transformacao.png';
import igualdadeImg from '../../assets/images/igualdade.png';


export default function Inicio(){
    return(
        <main>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={inclusaoImg} alt="Inclusão Social" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={leituraImg} alt="Leitura" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={transformacaoImg} alt="Transformação de vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={igualdadeImg} alt="Igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}
