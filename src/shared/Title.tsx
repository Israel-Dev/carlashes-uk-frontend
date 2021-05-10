import Styles from './Title.styled'


interface IProps {
    text: string
    subtext?: string
    isImage?: boolean
    isWhite?: boolean
    alt?: string
}

const Title = (props: IProps) => {

    const { text, subtext, isImage, alt, isWhite } = props

    return (
        <Styles className="title-wrapper" isWhite={isWhite}>
            {
                !isImage ?
                    <h3 className="title-text">{text}</h3>
                    :
                    <img className="title-image" src={text} alt={alt} />
            }
            {
                subtext ?
                    <span className="title-subtext poppins">{subtext}</span>
                    : null
            }
        </Styles>
    )
}

export default Title