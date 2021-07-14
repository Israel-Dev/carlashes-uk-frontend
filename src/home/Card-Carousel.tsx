import { useEffect, useState } from 'react';
import Card from './Card';
import Styles from './Card-Carousel.styled';
import image01 from '../assets/Card_01.webp';
import image02 from '../assets/Card_02.webp';
import image03 from '../assets/Card_03.webp';
import image04 from '../assets/Card_04.webp';
import image05 from '../assets/Card_05.webp';
import image06 from '../assets/Card_06.webp';
import image07 from '../assets/Card_07.webp';
import image08 from '../assets/Card_08.webp';
import image09 from '../assets/Card_09.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../utils/colors';

import { desktopCardWidth } from './Card.styled';
import { cardMargin } from './Card-Carousel.styled';

const CardCarousel = () => {
    const [items, setItems] = useState([
        {
            src: image01,
            alt: 'Patricia',
            text: 'Carla is the most genuine person I’ve met and an excellent professional , she’s been doing my lashes for 6 months now and it’s always getting better',
            url: 'testimonial-01',
        },
        {
            src: image02,
            alt: 'Nina Sane',
            text: 'I would highly recommend her services to anyone that is looking for a glamorous flawless look. I get people complimenting her work and asking where do I get my lashes done.',
            url: 'testimonial-01',
        },
        {
            src: image03,
            alt: 'Mariama Jalloh',
            text: "I can't wait to get my eyelashes done with you again. My lashes are still intact and look full after a whole month, I'm never leaving you girl cause you really are the Best!",
            url: 'testimonial-01',
        },
        {
            src: image04,
            alt: 'Lala',
            text: 'I am very happy with my lashes and how long it last.. My colleagues at work always give my lashes compliments 😁. Thank you, I feel and look like a bad bishhh 😄',
            url: 'testimonial-01',
        },
        {
            src: image05,
            alt: 'Raissa Medina',
            text: 'Carla has been doing my eyelash extensions for quite a few months now and I wouldn’t go anywhere else! I also have quite sensitive skin and eyes but have had no reaction to them.',
            url: 'testimonial-01',
        },
        {
            src: image06,
            alt: 'Paloma Sofia',
            text: "They’re definitely the best lashes I’ve ever had! I am so happy I found you, my eyelashes always look amazing. You're the best Carla 😘❤️",
            url: 'testimonial-01',
        },
    ]);

    const ilusionWidth =
        desktopCardWidth * items.length + cardMargin * items.length;

    const [left, setLeft] = useState<number>(-ilusionWidth);
    const [scrollDirection, setScrollDirection] = useState('');

    const itemsElem = items.map((item, i) => {
        return (
            <Card
                key={`card-${i}`}
                label={item.alt}
                text={item.text}
                image={item.src}
            />
        );
    });

    useEffect(() => {
        let scroll: NodeJS.Timeout;

        if (scrollDirection === 'left') {
            scroll = setInterval(() => {
                setLeft((left) => {
                    if (Math.abs(left) >= ilusionWidth) return 0;
                    return left - 1;
                });
            }, 1);
        } else if (scrollDirection === 'right') {
            scroll = setInterval(() => {
                setLeft((left) => {
                    if (Math.abs(left) === 0) return -ilusionWidth;
                    return left + 1;
                });
            }, 1);
        }

        return () => clearInterval(scroll);
    }, [scrollDirection]);

    return (
        <Styles className="card-carousel-wrapper">
            <div className="card-carousels" style={{ left: `${left}px` }}>
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
                    onMouseEnter={() => setScrollDirection('right')}
                    onMouseLeave={() => setScrollDirection('')}
                />
                <FontAwesomeIcon
                    className="right-arrow"
                    icon={faChevronCircleRight}
                    color={colors.purple}
                    size="2x"
                    onMouseEnter={() => setScrollDirection('left')}
                    onMouseLeave={() => setScrollDirection('')}
                />
            </footer>
        </Styles>
    );
};

export default CardCarousel;
