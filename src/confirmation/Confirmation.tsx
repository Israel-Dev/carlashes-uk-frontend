import Styles from './Confirmation.styled'
import Modal from '../shared/Modal'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const { REACT_APP_SERVER_ADDRESS } = process.env

const Confirmation = () => {
    const [message, setMessage] = useState<{ title: string, text: string }>()

    const history = useHistory()
    const location = useLocation()
    console.log(location)

    const confirmEvent = async () => {
        try {
            const event_ref = new URLSearchParams(location.search).get("event_ref")

            const response = await axios.post(`${REACT_APP_SERVER_ADDRESS}/calendar/confirmEvent`,
                {
                    event_ref
                }
            )

            const status = response.status

            switch (status) {
                case 200:
                    setMessage({
                        title: `${status} - Success!`,
                        text: response.data.message as string
                    })
                    break;
            }
        } catch (e) {
            console.error(e)
            if (e.response) {

                const status = e.response.status
                switch (status) {
                    case 404:
                    case 403:
                        setMessage({
                            title: `${status} - ${e.response.statusText}`,
                            text: e.response.data.message as string
                        })
                        break;
                    default:
                        setMessage({
                            title: "An error happened",
                            text: "The appointment wasn't confirmed due to an unkown error"
                        })
                }
            }
        }
    }

    const confirmPurchase = async () => {
        try {
            const order_ref = new URLSearchParams(location.search).get("order_ref")

            const response = await axios.post(`${REACT_APP_SERVER_ADDRESS}/purchase/confirmPayment`,
                {
                    order_ref
                }
            )

            const status = response.status

            switch (status) {
                case 200:
                    setMessage({
                        title: `${status} - Success!`,
                        text: response.data.message as string
                    })
                    break;
            }
        } catch (e) {
            console.error(e)
            if (e.response) {

                const status = e.response.status
                switch (status) {
                    case 404:
                    case 403:
                        setMessage({
                            title: `${status} - ${e.response.statusText}`,
                            text: e.response.data.message as string
                        })
                        break;
                    default:
                        setMessage({
                            title: "An error happened",
                            text: "We're not able to retreive information about the choosen order"
                        })
                }
            }
        }
    }

    useEffect(() => {
        const { pathname } = location

        switch (pathname) {
            case "/appointment-confirmed":
                confirmEvent()
                break;
            case "/purchase-confirmed":
                confirmPurchase()
                break;
        }
    }, [])

    return (
        <Styles className="confirmation-wrapper">
            <Modal
                isVisible={true}
                title={message?.title as string}
                message={message?.text as string}
                hideModalCallback={() => history.push("/")}
                buttonLabel="Ok"
            ></Modal>
        </Styles>
    )
}

export default Confirmation