import Styles from './Sticker.styled'

interface IProps {
    numbers?: string | number
    label: string
}


const Sticker = (props: IProps) => {

    const { numbers, label } = props

    return (
        <Styles className="sticker-wrapper">
            {
                numbers ?
                    <h2 className="number">{numbers}</h2>
                    : null
            }
            <p className="text">{label}</p>
        </Styles>
    )
}

export default Sticker