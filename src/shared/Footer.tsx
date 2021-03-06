import Styles from './Footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';

const {
    REACT_APP_EMAIL,
    REACT_APP_OFFICE_ADDRESS,
    REACT_APP_CITY,
    REACT_APP_ZIP_CODE,
} = process.env;

const Footer = () => {
    const history = useHistory();

    const goToAboutUs = () => {
        window.scrollTo(0, 0);
        history.push('/about-us');
    };

    return (
        <Styles className="footer-wrapper">
            <div className="footer-padding">
                <header className="top-section">
                    <img
                        src={
                            'https://drive.google.com/uc?export=view&id=15BpofaJVctDboSVBRezIlcwSTzSXw-E6'
                        }
                        alt="Carlashes UK"
                        className="logo-image"
                    />
                </header>
                <section className="middle-section">
                    <aside className="left-corner">
                        <p className="text-under-logo">
                            We simply accentuate the natural beauty that is
                            already there
                        </p>
                        <h5 className="color-text-under-logo">
                            {REACT_APP_EMAIL}
                        </h5>
                    </aside>
                    <aside className="right-corner">
                        <p className="right-text">
                            {REACT_APP_OFFICE_ADDRESS} <br />
                            {REACT_APP_CITY}, <br />
                            {REACT_APP_ZIP_CODE}, <br />
                            United Kingdom
                        </p>
                        <p
                            className="right-text link"
                            style={{ cursor: 'pointer', margin: 0 }}
                            onClick={goToAboutUs}
                        >
                            About Us
                        </p>
                    </aside>
                </section>
                <hr className="horizontal-rule" />
                <footer className="bottom-section">
                    <p className="bottom-text">
                        Copyright, Carlashes, 2022. All rights reserved
                    </p>
                    <div className="social-midia-wrapper">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            size="2x"
                            onClick={() =>
                                window.open(
                                    'https://www.instagram.com/carlashes_/?r=nametag',
                                    '_blank'
                                )
                            }
                            cursor="pointer"
                        />
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="2x"
                            onClick={() =>
                                window.open(
                                    'https://web.whatsapp.com',
                                    '_blank'
                                )
                            }
                            cursor="pointer"
                        />
                        <FontAwesomeIcon
                            icon={faFacebook}
                            size="2x"
                            onClick={() =>
                                window.open('https://facebook.com', '_blank')
                            }
                            cursor="pointer"
                        />
                    </div>
                </footer>
            </div>
        </Styles>
    );
};

export default Footer;
