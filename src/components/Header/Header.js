import Link from 'next/link';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const navigation = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Blog',
        path: '/blog2'
    },
    {
        id: 3,
        title: 'Clinics',
        path: '/clinic'
    },
    {
        id: 4,
        title: 'Contact us',
        path: '/contact-us'
    },


]

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
                                <li className={`nav__menu-item ${isClicked && 'active'}`} key={id}><Link href={path}>{title}</Link></li>
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
                    <button>Sign Up</button>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default Header;