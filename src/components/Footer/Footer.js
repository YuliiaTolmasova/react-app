import Link from 'next/link';
import Logo from '../Logo/Logo';

const navigationFooter = [
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
    }
]

const Footer = () => (
    <div className='footer'>
        <div className="container footer__container">
            <Logo></Logo>
            <div className="footer__menu">
                {navigationFooter.map(item => {
                    const {id, title, path} = item;
                    return <li key={id}><Link href={path}>{title}</Link></li>
                })}
            </div>
            <div className="footer__copyright">
                © 2077 Untitled UI
            </div>
        </div>
    </div>
);

export default Footer;