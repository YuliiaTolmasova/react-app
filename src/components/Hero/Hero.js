import Link from "next/link";
import HeroImage from "./HeroImage";
import { useState } from 'react';


const contactsLink = '/contact-us'

const Hero = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
    <div className='hero'>
        <div className="container hero__container">
            <div className="hero__descr">
                <div className="hero__descr-title">
                    Найкращі клініки України
                </div>
                <div className="hero__descr-text">
                Бажаєте ознайомитися з найкращими клініками в Україні? Дивіться наш рейтинг з медичних центрів.
                Зробіть вибір та залиште запит на отримання безкоштовної підтримки.
                </div>
                <div className={`hero__button ${isClicked && 'active'}`}>
                    <Link className="button" href={contactsLink}>Зв'язатись з нами</Link>
                </div>
            </div>
            <div className="hero__image">
                <HeroImage></HeroImage>
            </div>
        </div>
    </div>
    );
}

export default Hero;