import Styles from './Photo-Wall.styled';
import Card_01 from '../assets/Card_01.webp';
import Card_02 from '../assets/Card_02.webp';
import Card_03 from '../assets/Card_03.webp';
import Card_04 from '../assets/Card_04.webp';
import Card_05 from '../assets/Card_05.webp';

const items = [
    { img: Card_01, alt: 'Classics' },
    { img: Card_02, alt: 'Light Volume' },
    { img: Card_03, alt: 'Russians Volume' },
    { img: Card_04, alt: 'Mega Volume' },
    { img: Card_05, alt: 'Some text' },
];

const PhotoWall = () => {
    const photoElems = items.map((item, i) => (
        <article
            key={`photo-wall-${i}`}
            className={`photo-wall-article article-item-${i}`}
        >
            <img
                src={item.img}
                alt={item.alt}
                className={`photo-wall-img img-${i}`}
            />
        </article>
    ));

    return <Styles className="photo-wall-wrapper">{photoElems}</Styles>;
};

export default PhotoWall;
