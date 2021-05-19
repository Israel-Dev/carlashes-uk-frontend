import Styles from './Cover.styled'

interface IProps {
    title: string
    images: {src: string, alt: string}[]
}

const Cover = (props: IProps) => {

    const { images, title } = props

    const imagesElem = images.map((el, i) => {
        return <img 
            key={`cover-${i}`}
            src={el.src} 
            alt={el.alt} 
            width="100%"
            height="auto"
            />
    })

    return (
        <Styles className="cover-wrapper">
            <h1 className="cover-title">{title}</h1>
            {imagesElem}
            <div className="image-gradient" />
        </Styles>
    )
}

export default Cover