import Styles from './404.styled'
import Gradient from '../shared/Gradient'
import Modal from '../shared/Modal'
import { useHistory } from 'react-router-dom'

const _404 = () => {
    const history = useHistory()

    return (
        <Styles className="404-wrapper">
            <Gradient/>
            <Modal 
                title="404 - Page not found"
                buttonLabel="Ok"
                isVisible={true}
                message="The requested url was not found"
                hideModalCallback={() => history.push("/")}
            />
        </Styles>
    )
}

export default _404