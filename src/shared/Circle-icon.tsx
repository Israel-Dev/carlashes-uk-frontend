import { faHandshake, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './Circle-icon.styled'

interface IProps {
    icon: IconDefinition
    text?: string
}

const CircleIcon = (props: IProps) => {

    const { text, icon } = props

    return (
        <Styles className="icon-circle-wrapper">
            <div className="icon-circle">
                <FontAwesomeIcon icon={icon} color="white" size="2x" />
            </div>
            {
                text &&
                <p className="icon-circle-paragraph">
                    {text}
                </p>
            }
        </Styles>
    )
}

export default CircleIcon