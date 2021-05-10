import { ReactFragment } from 'react'
import Styles from './Modal.styled'
import Button from './Button-2'

interface IProps {
    isVisible: boolean | null
    title: string | Element | React.Component | ReactFragment | null
    message: string
    hideModalCallback: Function
    buttonLabel: string
}

const Modal = (props: IProps) => {
    const { isVisible, title, message, hideModalCallback, buttonLabel } = props

    return (
        <Styles className="modal-wrapper" isVisible={isVisible}>
            <div className={`modal ${isVisible || isVisible === null? "visible" : ""}`}>
                <div className="modal-box">
                    {
                        title &&
                        <h3 className="title">{title}</h3>
                    }
                    <p className="paragraph">{message}</p>
                    <Button
                        isReverse={true}
                        label={buttonLabel}
                        callback={() => hideModalCallback()} 
                    />
                </div>
            </div>
        </Styles>
    )
}

export default Modal