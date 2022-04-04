import { useState } from 'react';
import Styles from './Gallery.styled';
import TransitionDots from '../nano/Transition-Dots';
import { useEffect } from 'react';

interface IProps {
    images: { src: string; alt: string }[];
    hasDots?: boolean;
    title?: string;
}

const Gallery = (props: IProps) => {
    const [activeImage, setActiveImage] = useState(0);
    const { images, hasDots, title } = props;

    const imagesElem = images.map((image, i) => (
        <article
            className={`gallery-image-article ${
                i === activeImage ? 'visible' : 'hidden'
            }`}
            key={`${image.alt}-${i}`}
        >
            <img className="gallery-image" src={image.src} alt={image.alt} />
        </article>
    ));

    useEffect(() => {
        setActiveImage(0);
    }, [images]);

    return (
        <Styles className="gallery-wrapper">
            {title && (
                <header className="gallery-header-title-mobile">
                    <h2 className="product-title">{title}</h2>
                </header>
            )}
            {imagesElem}
            {hasDots && images.length > 1 && (
                <footer className="dots-footer">
                    <TransitionDots
                        callback={setActiveImage}
                        contentArr={images}
                        activeContent={activeImage}
                        isGray={true}
                    />
                </footer>
            )}
        </Styles>
    );
};

export default Gallery;
