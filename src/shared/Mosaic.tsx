import Styles from './Mosaic.styled'

import { useHistory } from 'react-router-dom'

interface IProps {
    items: {src: string, alt: string, url: string}[]
}

const Mosaic = (props: IProps) => {
    const { items } = props
    const history = useHistory()

    const imagesElem = items.map((image, i) => (
        <div className="mosaic-image-wrapper" 
            key={`mosaic-${i}`}
            onClick={() => {
                window.scrollTo(0,0)
                history.push(`/${image.url}`)
            }}
            >
            <span className="mosaic-overlay-text">{image.alt}</span>
            <div className="mosaic-gradient-image"></div>
            <img
                className="mosaic-image"
                src={image.src}
                alt={image.alt}
            />
        </div>
    ))

    return (
        <Styles className="mosaic-wrapper">
            {imagesElem}
        </Styles>
    )
}

export default Mosaic