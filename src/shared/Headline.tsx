import { useEffect, useState } from 'react'
import Styles from './Headline.styled'
import Price from '../shared/Price'
import Button from './Button'

interface IProps {
    title: string,
    teaser: string,
    description: string,
    price: string,
    ref: string,
    images: string[],
    reverse?: boolean
}

const Headline = (props: IProps) => {
    const [active, setActive] = useState(0)

    const { title, teaser, description, price, ref, images, reverse } = props

    useEffect(() => {
        const changeImage = setInterval(() => {
            setActive((active) => {
                const nextImage = active + 1 === images.length ? 0 : active + 1
                return nextImage
            })
        }, 3000)

        return () => clearInterval(changeImage)
    }, [])

    const imgElems = images.map((image, i) => {
        return (
            <img
                src={image}
                alt={`${title}`}
                key={Math.random()}
                className={`treatment-image ${active !== i ? "hidden" : ""}`}
            />
        )
    })

    return (
        <Styles className={`headline-wrapper`} reverse={reverse as boolean}>
            <aside className="headline-aside">
                {imgElems}
            </aside>
            <article className="headline-article">
                <div className="headline-article-padding">
                    <p className="headline-paragraph">{teaser}</p>
                    <h3 className="headline-title">{title}</h3>
                    <p className="headline-description">{description}</p>
                    <footer className="headline-footer">
                        <aside className="headline-price">
                            <Price
                                value={`£${price}`}
                            />
                        </aside>
                        <Button
                            label="Schedule"
                            callback={() => {
                                const calendarPosition = document.body.scrollHeight - 1400
                                window.scrollTo(0, calendarPosition)
                            }}
                        />
                    </footer>
                </div>
            </article>
        </Styles>
    )
}

export default Headline