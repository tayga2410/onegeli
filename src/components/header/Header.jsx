import './header.css';
import Nav from '../nav/Nav';
import Contacts from '../contacts/HeaderContacts';

export default function Header() {
    return (
        <section className='header' id="header">
            <h1 className='visually-hidden'>Профессиональное агенство по подготовке персонала по уходу за детьми</h1>
            <Nav />
            <Contacts />
        </section>
    )
}