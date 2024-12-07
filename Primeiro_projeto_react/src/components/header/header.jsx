import logo from '../../assets/images/logo.png';
import busca from '../../assets/images/search.png';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Inicio from '../../Pages/Inicio/inicio';
import Doar from '../../Pages/Doar/doados';
import QueroDoar from '../../Pages/QueroDoar/queroDoar';
import S from './header.module.scss';

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                < img src={logo} alt='imagem de um livro' />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/Doar'>Livros Doados</Link></li>
                    <li><Link to='QueroDoar'>Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder='O que você procura?'/>
                <img src={busca} alt=""/>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/Doar' element={<Doar/>}/>
            <Route path='/QueroDoar' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )

}