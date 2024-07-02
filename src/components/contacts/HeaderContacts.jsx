import './headerContacts.css'
import phone from '../../assets/phone-icon.svg'
import instagram from '../../assets/instagram-icon.svg'
import whatsapp from '../../assets/whatsapp-icon.svg'

export default function headerContacts() {
    return (
        <section className='contacts'>
            <div className='contacts__group'>
               <img src={phone} alt="" />
               <div className='contacts__text-group'>
                <p className='contacts__header'>Работаем с 10:00 до 19:00</p>
                <a className="contacts__phone" href="tel:+7-700-700-77-00">+7 (700) 700-77-00</a>
               </div>
            </div>
            <div className='contacts__socials'>
                <img src={whatsapp} alt="" />
                <img src={instagram} alt="" />
            </div>
        </section>
    )
}