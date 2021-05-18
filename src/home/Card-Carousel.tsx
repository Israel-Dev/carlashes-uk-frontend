import { useEffect, useState } from 'react'
import Card from './Card'
import Styles from './Card-Carousel.styled'
import image01 from '../assets/Card_01.webp'
import image02 from '../assets/Card_02.webp'
import image03 from '../assets/Card_03.webp'
import image04 from '../assets/Card_04.webp'
import image05 from '../assets/Card_05.webp'
import image06 from '../assets/Card_06.webp'
import image07 from '../assets/Card_07.webp'
import image08 from '../assets/Card_08.webp'
import image09 from '../assets/Card_09.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronCircleLeft,
    faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons'
import colors from '../utils/colors'

import { desktopCardWidth } from './Card.styled'
import { cardMargin } from './Card-Carousel.styled'

const CardCarousel = () => {
    const [items, setItems] = useState(
        [
            { src: image01, alt: "Renata Gonçalves", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image02, alt: "Carla Alexandra", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image03, alt: "Júlia Silva", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image04, alt: "Ana Gomes", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image05, alt: "Sofia Carvalho", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image06, alt: "Elizabete Joaquim", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image07, alt: "Rita Pereira", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image08, alt: "Débora Sousa", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
            { src: image09, alt: "Susana Augusta", text: "“Lorem ipsum dolor sit  amet, consectetur adipiscing elit.", url: "testimonial-01" },
        ]
    )

    const ilusionWidth = (desktopCardWidth * items.length) + (cardMargin * items.length)

    const [left, setLeft] = useState<number>(-ilusionWidth)
    const [scrollDirection, setScrollDirection] = useState("")

    const itemsElem = items.map((item, i) => {
        return (
            <Card
                key={`card-${i}`}
                label={item.alt}
                text={item.text}
                image={item.src}
            />
        )
    })

    useEffect(() => {
        let scroll : NodeJS.Timeout

        if (scrollDirection === "left") {
            scroll = setInterval(() => {
                setLeft((left) => {
                    if (Math.abs(left) >= ilusionWidth) return 0
                    return left - 1
                })
            }, 1)
        } else if (scrollDirection === "right") {
            scroll = setInterval(() => {
                setLeft((left) => {
                    if (Math.abs(left) === 0) return -ilusionWidth
                    return left + 1
                })
            }, 1)
        }

        return () => clearInterval(scroll)
    }, [scrollDirection])

    return (
        <Styles
            className="card-carousel-wrapper"
        >
            <div
                className="card-carousels"
                style={{ left: `${left}px` }}
            >   
                {itemsElem}
                {itemsElem}
                {itemsElem}
            </div>
            <footer className="card-carousel-arrows-wrapper">
                <FontAwesomeIcon
                    className="left-arrow"
                    icon={faChevronCircleLeft}
                    color={colors.purple}
                    size="2x"
                    onMouseEnter={() => setScrollDirection("right")}
                    onMouseLeave={() => setScrollDirection("")}
                />
                <FontAwesomeIcon
                    className="right-arrow"
                    icon={faChevronCircleRight}
                    color={colors.purple}
                    size="2x"
                    onMouseEnter={() => setScrollDirection("left")}
                    onMouseLeave={() => setScrollDirection("")}
                />
            </footer>
        </Styles>
    )
}

export default CardCarousel