import './nav.css';
import logo from '../../assets/logo-main.png';

export default function Nav () {
    return (
       <div className='nav__container'>
        <img className='nav__logo' src={logo} alt="" />
        <div className='nav__language-selector'>RU</div> 
        <ul className='nav__list'>
            <li className='nav__item'><a className="nav__link" href="">Особенности</a></li>
            <li className='nav__item'><a className="nav__link" href="">Планы</a></li>
            <li className='nav__item'><a className="nav__link" href="">Отзывы</a></li>
        </ul>
       </div> 
    )
}