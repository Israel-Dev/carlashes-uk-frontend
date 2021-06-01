import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Styles from './Loading.styled'
import colors from '../utils/colors'

const Loading = () => {
    return (
        <Styles className="loading-wrapper">
            <article className="loading-div">
                <FontAwesomeIcon
                    icon={faCircleNotch}
                    size="3x"
                    color={colors.purple}
                    spin
                />
            </article>
        </Styles>
    )
}

export default Loading