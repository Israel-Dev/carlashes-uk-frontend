import Styles from './Stepper.styled'
import Label from '../nano/Label'

interface IProps {
    label: string
    callback: Function
    quantity: number
}

const Stepper = (props: IProps) => {
    const { label, callback, quantity } = props

    return (
        <Styles className="stepper-wrapper">
            {
                label &&
                <Label text={label} />
            }
            <div className="stepper-container">
                <div
                    className="box"
                    onClick={() => {
                        if (quantity > 1) callback(quantity - 1)
                    }}
                >
                    -
                </div>
                <div className="box center">
                    {quantity}
                </div>
                <div
                    className="box"
                    onClick={() => {
                        callback(quantity + 1)
                    }}
                >
                    +
                </div>
            </div>
        </Styles>
    )
}

export default Stepper