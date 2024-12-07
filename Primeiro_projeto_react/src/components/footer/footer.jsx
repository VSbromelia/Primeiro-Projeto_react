import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/ig.png'
import S from './footer.module.scss';


export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={facebook} alt="" /> </a>
                    <a href=""> <img src={twitter} alt="" /> </a>
                    <a href=""> <img src={youtube} alt="" /> </a>
                    <a href=""> <img src={linkedin} alt="" /> </a>
                    <a href=""> <img src={instagram} alt="" /> </a>
                </nav>
            </section>

        </footer>
    )
}