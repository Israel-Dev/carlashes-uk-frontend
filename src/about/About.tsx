import Styles from './About.styled';
import Gradient from '../shared/Gradient';
import Logo from '../assets/logo.png';
import Title from '../shared/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAward,
    faTruck,
    faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import CircleIcon from '../shared/Circle-icon';
import PhotoCard from '../shared/Photo-Card';
import CEO from '../assets/Ceo.webp';

const About = () => {
    return (
        <Styles className="about-wrapper">
            <Gradient />
            <div className="about-padding">
                <header className="about-header">
                    <img
                        src={
                            'https://drive.google.com/uc?export=view&id=1-HD_Ei3ua7INsIfFj_B8ViCQEjj7zaD4'
                        }
                        alt="Carlashes-uk Logo"
                        className="about-logo"
                    />
                    <p className="about-paragraph Philosopher">
                        “Lorem Ipsum text over here, another line here too”
                    </p>
                </header>
                <section className="about-section">
                    <article className="about-article">
                        <Title text="Our Products" />
                        <section className="about-article-section">
                            <p className="about-article-paragraph">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                            <footer className="about-article-footer">
                                <CircleIcon icon={faHandshake} text="Trust" />
                                <CircleIcon icon={faAward} text="Honor" />
                                <CircleIcon
                                    icon={faTruck}
                                    text="Fast delivery"
                                />
                            </footer>
                        </section>
                    </article>
                    <article className="about-article">
                        <Title text="About Me" />
                        <PhotoCard
                            img={CEO}
                            alt="Carla Gomes Santo, CEO, Carlashes UK"
                            text="Carla Santo, CEO of Carlashes, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                            ad minim veniam, quis nostrud exercitation."
                        />
                    </article>
                </section>
            </div>
        </Styles>
    );
};

export default About;
