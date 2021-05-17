import Styles from './Button.styled'

interface IProps {
    label: string
    callback: Function
    isFullWidth?: boolean
}

const Button = (props: IProps) => {
    const { label, callback, isFullWidth } = props

    return (
        <Styles className={`button-wrapper ${isFullWidth ? "full-width-mobile": ""}`} onClick={() => callback()}>
            { label }
        </Styles>
    )
}

export default Button
