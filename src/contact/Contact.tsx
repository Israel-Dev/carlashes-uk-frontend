import Styles from './Contact.styled'
import Gradient from '../shared/Gradient'
import Title from '../shared/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const {
    REACT_APP_INSTAGRAM_PROFILE,
    REACT_APP_INSTAGRAM_URL,
    REACT_APP_EMAIL,
    REACT_APP_PHONE_NUMBER
} = process.env

const Contact = () => {
    return (
        <Styles className="contact-wrapper">
            <Gradient />
            <section className="contact-padding">
                <Title text="Get in Touch" />
                <section className="contact-container">
                    <article className="contact-article">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                        <p className="article-paragraph">Follow us on Instagram</p>
                        <span className="article-span">
                            <a className="article-href" href={REACT_APP_INSTAGRAM_URL} target="_blank">
                                {REACT_APP_INSTAGRAM_PROFILE}
                            </a>
                        </span>
                    </article>
                    <span className="split-bar" />
                    <article className="contact-article">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        <p className="article-paragraph">Send us an Email</p>
                        <span className="article-span">
                            <a className="article-href" href={`mailto:${REACT_APP_EMAIL}`}>
                                {REACT_APP_EMAIL}
                            </a>
                        </span>
                    </article>
                    <span className="split-bar" />
                    <article className="contact-article">
                        <FontAwesomeIcon icon={faPhone} size="3x" />
                        <p className="article-paragraph">Give us a Call</p>
                        <span className="article-span">
                            <u className="article-href">
                                {REACT_APP_PHONE_NUMBER}
                            </u>
                        </span>
                    </article>
                </section>
            </section>
        </Styles>
    )
}

export default Contact