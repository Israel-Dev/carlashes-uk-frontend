import Styles from './Carousel.styled';
import image00 from '../assets/Slider_05.webp';
import image01 from '../assets/Slider_02.webp';
import image02 from '../assets/Slider_03.webp';
import image03 from '../assets/Slider_04.webp';
import React, { useEffect, useState } from 'react';
import Sticker from '../shared/Sticker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../utils/stylesheet';
import TransitionDots from '../nano/Transition-Dots';

interface IProps {
    hasSticker?: boolean;
    hasDots?: boolean;
}

const Carousel = (props: IProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [images, setImages] = useState([
        'https://drive.google.com/uc?export=view&id=14bZXLWfkj73-XJM76Jb8ge-AOMO2ypqX',
        image01,
        image02,
        image03,
    ]);

    const { hasSticker, hasDots } = props;

    useEffect(() => {
        if (process.env.REACT_APP_ENVIRONMENT !== 'development') {
            const autoImageChange = setTimeout(() => {
                setActiveIndex(
                    activeIndex >= images.length - 1 ? 0 : activeIndex + 1
                );
            }, 5000);
            return () => clearTimeout(autoImageChange);
        }
    }, [activeIndex]);

    const changeImage = (imageIndex: number) => {
        setActiveIndex(imageIndex);
    };

    const imagesElem = images.map((image, i) => (
        <img
            key={`${i}-carousel-image`}
            className={activeIndex === i ? 'current-image' : 'previous-image'}
            src={image}
            height="auto"
            width="auto"
        />
    ));

    return (
        <Styles className="carrousel-wrapper">
            <div className="carousel-down-arrow-wrapper">
                <FontAwesomeIcon
                    size="2x"
                    icon={faChevronCircleDown}
                    color={colors.purple}
                    className="down-arrow-icon"
                    onClick={() => window.scrollTo(0, 650)}
                />
                <span className="down-arrow-background" />
            </div>
            {hasDots && (
                <div className="carousel-dots-wrapper">
                    <TransitionDots
                        callback={changeImage}
                        contentArr={images}
                        activeContent={activeIndex}
                    />
                </div>
            )}
            <div className="carousel-title">
                <h1 className="carousel-maintitle">
                    The best eyelashes
                    <br />
                    in all UK
                </h1>
                <p className="carousel-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    quisque nisl eros.
                </p>
            </div>
            {hasSticker && (
                <div className="carousel-sticker-wrapper">
                    <div className="carousel-sticker-position">
                        <Sticker numbers="10%" label="Discount" />
                    </div>
                </div>
            )}
            <div className="image-gradient" />
            {imagesElem}
            <img className="hidden-image" src={images[activeIndex]} />
        </Styles>
    );
};

export default Carousel;
