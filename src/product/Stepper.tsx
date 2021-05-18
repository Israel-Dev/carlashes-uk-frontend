import Styles from './Stepper.styled'
import Label from '../nano/Label'

interface IProps {
    label: string
    callback: Function
    quantity: number
}

const Stepper = (props: IProps) => {
    const { label, callback, quantity } = props

    const lessOne = () => {
        if (quantity > 1) callback(quantity - 1)
    }

    const plusOne = () => {
        callback(quantity + 1)
    }

    return (
        <Styles className="stepper-wrapper">
            {
                label &&
                <Label text={label} />
            }
            <div className="stepper-container">
                <div
                    className="box"
                    onClick={lessOne}
                >
                    -
                </div>
                <div className="box center">
                    {quantity}
                </div>
                <div
                    className="box"
                    onClick={plusOne}
                >
                    +
                </div>
            </div>
        </Styles>
    )
}

export default Stepper