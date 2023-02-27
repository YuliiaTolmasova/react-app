import Link from "next/link";
import HeroImage from "./HeroImage";


const Hero = () => (
    <div className='hero'>
        <div className="container hero__container">
            <div className="hero__descr">
                <div className="hero__descr-title">
                    Smart business credit cards
                </div>
                <div className="hero__descr-text">
                    Untitled is a next-gen financial technology company in the process of reinventing banking.
                </div>
                <button>Sign Up</button>
            </div>
            <div className="hero__image">
                <HeroImage></HeroImage>
            </div>
        </div>
    </div>
);

export default Hero;