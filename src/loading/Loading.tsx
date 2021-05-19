import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Styles from './Loading.styled'
import colors from '../utils/colors'

const Loading = () => {
    return (
        <Styles className="loading-wrapper">
            <article className="loading-div">
                <FontAwesomeIcon
                    icon={faSpinner}
                    size="5x"
                    color={colors.purple}
                    spin
                />
            </article>
        </Styles>
    )
}

export default Loading