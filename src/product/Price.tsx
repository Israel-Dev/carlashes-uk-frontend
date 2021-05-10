import Styles from './Price.styled'

interface IProps {
    value: string
}

const Price = (props: IProps) => {
    const { value } = props

    return (
        <Styles className="price-wrapper">
            <span className="price-span">{value}</span>
        </Styles>
    )
}

export default Price