import Styles from './Card.styled'

interface IProps {
    label: string,
    text: string,
    image: string,
}

const Card = (props: IProps) => {
    const { label, text, image } = props

    return (
        <Styles className="card-wrapper">
            <div className="card-image-wrapper">
                <img className="card-image" src={image} alt={label} />
                <div className="card-label-background">
                    <h4 className="label-text">{label}</h4>
                </div>
            </div>
            <div className="card-text-background">
                <p className="text">{text}</p>
            </div>
        </Styles>
    )
}

export default Card