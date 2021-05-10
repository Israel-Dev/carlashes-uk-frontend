import Styles from './Button-2.styled'

interface IProps {
    label: string
    callback: Function
    isReverse?: boolean
}

const Button_2 = (props: IProps) => {
    const { label, callback, isReverse} = props

    return (
        <Styles className="button-2-wrapper" onClick={() => callback()} isReverse={isReverse}>
            <h5 className="label">{ label }</h5>
        </Styles>
    )
}

export default Button_2