import Styles from './Photo-Card.styles'

interface IProps {
    img: string
    alt: string
    text?: string
}

const PhotoCard = (props: IProps) => {
    const { img, alt, text } = props

    return (
        <Styles className="photo-card-wrapper">
            <img
                className="photo-card-img"
                src={img}
                alt={alt}
            />
            {
                text &&
                <div
                    className="photo-card-text-div"
                >
                    <p className="photo-card-paragraph">
                        {text}
                    </p>
                </div>
            }
        </Styles>
    )
}

export default PhotoCard