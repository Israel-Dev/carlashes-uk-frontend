import Styles from './Transition-Dots.styled'

interface IProps {
    callback: Function
    contentArr: any[]
    activeContent: number
    isGray?: boolean
}

const TransitionDots = (props: IProps) => {
    const { callback, contentArr, activeContent, isGray } = props


    const dotsElem = contentArr.map((content, i) => (
        <span
            onClick={() => callback(i)}
            key={`${i}-circle`}
            className={`circle ${activeContent === i ? "active" : ""}`}
        />
    ))

    return (
        <Styles className="transition-dots-wrapper" isGray={isGray as boolean}>
            {dotsElem}
        </Styles>
    )
}

export default TransitionDots