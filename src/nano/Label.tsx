import Styles from './Label.styled'

interface IProps {
    text: string
}

const Label = (props: IProps) => {
    const { text } = props
    
    return (
        <Styles className="label-wrapper">
            {text}
        </Styles>
    )
}

export default Label