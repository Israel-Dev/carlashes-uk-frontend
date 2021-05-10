import Styles from './Banner-Carousel.styled'
import backgroundImg from '../assets/Product_04.jpg'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const BannerCarousel = () => {
    const [active, setActive] = useState(0)
    const [texts, setTexts] = useState(
        [
            {
                longtext: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."',
                author: "Person Name"
            },
            {
                longtext: '"Exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."',
                author: "2 Andreia Batista"
            },
            {
                longtext: '"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud"',
                author: "3 Josega Gomes"
            }
        ]
    )

    useEffect(() => {
        const autoImageChange = setTimeout(() => {
            setActive(active >= texts.length - 1 ? 0 : active + 1)
        }, 5000)
        return () => clearTimeout(autoImageChange)
    }, [active])

    const textElem = texts.map((text, i) => (
        <div className={`banner-text-wrapper ${i === active ? "visible" : "hidden"}`} key={`page-break-item-${i}`}>
            <p className="banner-text-paragraph">
                <i>
                    {text.longtext}
                </i>
            </p>
            <p className="banner-text-paragraph author">{text.author}</p>
        </div>
    ))

    return (
        <Styles className="banner-carousel-wrapper">
            {textElem}
            <img className="banner-image" src={backgroundImg} alt="banner-background-image" />
        </Styles>
    )
}

export default BannerCarousel