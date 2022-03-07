import { useState } from 'react';
import Styles from './Photo-Carousel.styled';
import { LabelCard, Photo } from '../shared';
import Card_01 from '../assets/Card_01.webp';
import Card_02 from '../assets/Card_02.webp';
import Card_03 from '../assets/Card_03.webp';
import Card_04 from '../assets/Card_04.webp';
import Card_05 from '../assets/Card_05.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from 'utils/stylesheet';
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
    items: { img: string; alt: string }[];
}

const items = [
    { img: Card_01, alt: 'Classics' },
    { img: Card_02, alt: 'Light Volume' },
    { img: Card_03, alt: 'Russians Volume' },
    { img: Card_04, alt: 'Mega Volume' },
    { img: Card_05, alt: 'Some text' },
];

const PhotoCarousel = ({ items }: Props) => {
    const [activeImage, setActiveImage] = useState<number>(
        items.length % 2 === 0
            ? Math.floor(items.length / 2) - 1
            : Math.floor(items.length / 2)
    );

    const handleArrowClick = (direction: 'right' | 'left') => {
        if (activeImage < items.length - 1 && direction === 'right') {
            setActiveImage(activeImage + 1);
        } else if (direction === 'right' && activeImage === items.length - 1) {
            setActiveImage(0);
        } else if (activeImage !== 0 && direction === 'left') {
            setActiveImage(activeImage - 1);
        } else if (direction === 'left' && activeImage === 0) {
            setActiveImage(items.length - 1);
        }
    };

    const PhotoElem = items.map((item, i) => (
        <article
            className={`photo-carousel-article ${
                i === activeImage ? 'main' : 'secondary'
            }`}
            key={`photo-carousel-${i}`}
        >
            <aside className="label-card-aside">
                <div className="label-card-div">
                    <LabelCard label={item.alt} />
                </div>
            </aside>
            <Photo img={item.img} alt={item.alt} />
        </article>
    ));

    return (
        <Styles
            className="photo-carousel-wrapper"
            activeIndex={activeImage}
            numberOfItems={items.length}
        >
            <section className="photo-carouse-container">
                <div
                    className={`photo-carousel-flex position-flex-${activeImage}`}
                >
                    {PhotoElem}
                </div>
            </section>
            {items.length > 1 && (
                <footer className="photo-carousel-arrows-wrapper">
                    <div className="photo-carousel-arrows">
                        <FontAwesomeIcon
                            className="left-arrow"
                            icon={faChevronCircleLeft}
                            color={colors.purple}
                            size="2x"
                            onClick={() => handleArrowClick('left')}
                        />
                        <FontAwesomeIcon
                            className="right-arrow"
                            icon={faChevronCircleRight}
                            color={colors.purple}
                            size="2x"
                            onClick={() => handleArrowClick('right')}
                        />
                    </div>
                </footer>
            )}
        </Styles>
    );
};

export default PhotoCarousel;
