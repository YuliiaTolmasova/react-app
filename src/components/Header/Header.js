import Link from 'next/link';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const navigation = [
    {
        id: 1,
        title: 'Головна',
        path: '/'
    },
    {
        id: 2,
        title: 'Новини',
        path: '/blog'
    },
    {
        id: 3,
        title: 'Клініки',
        path: '/clinic'
    },
    {
        id: 4,
        title: 'Контакт з нами',
        path: '/contact-us'
    },
]
const contactsLink = '/contact-us'

const Header = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className='header'>
            <div className='container header__container'>
                <div className='header__block'>
                <Logo/>
                    <nav className='nav'>
                        <ul className={`nav__menu ${isClicked && 'active'}`}>
                            {navigation.map(({id, title, path}) => (
                                <li className={`nav__menu-item ${isClicked && 'active'}`} key={id}>
                                    <Link href={path} key={id+"link"}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className={`nav__burger ${isClicked && 'active'}`} onClick={() => setIsClicked(!isClicked)} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div className={`header__button ${isClicked && 'active'}`}>
                    <Link className="button" href={contactsLink}>Зв'язатись з нами</Link>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default Header;