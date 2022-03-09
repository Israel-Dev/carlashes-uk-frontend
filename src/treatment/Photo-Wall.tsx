import Styles from './Photo-Wall.styled';

interface Props {
    items: { img: string; alt: string }[];
}

const PhotoWall = ({ items }: Props) => {
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
