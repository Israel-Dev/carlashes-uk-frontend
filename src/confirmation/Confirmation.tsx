import Styles from './Confirmation.styled'
import Modal from '../shared/Modal'
import { useHistory, useLocation } from 'react-router-dom'
import { ReactElement, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const { REACT_APP_SERVER_ADDRESS } = process.env

const Confirmation = () => {
    const [message, setMessage] = useState<{ title: string | ReactElement, text: string }>(
        {
            title: <FontAwesomeIcon icon={faCircleNotch} spin={true}/>,
            text: ""
        }
    )

    const history = useHistory()
    const location = useLocation()

    const requestBooking = async () => {
        try {
            const event_ref = new URLSearchParams(location.search).get("event_ref")
            const isCancelled = new URLSearchParams(location.search).get("canceled")

            if (isCancelled) {
                const response = await axios.delete(`${REACT_APP_SERVER_ADDRESS}/calendar/cancelBooking`, {
                    data: {
                        event_ref
                    }
                })

                const status = response.status

                switch (status) {
                    case 202:
                        return setMessage({
                            title: `${status} - ${response.data.title ? response.data.title : "Cancelled"}`,
                            text: response.data.message as string
                        })
                    case 400:
                        return setMessage({
                            title: `${status} - ${response.data.title ? response.data.title : "Bad Request"}`,
                            text: response.data.message as string
                        })
                }
            }

            const isSuccessful = new URLSearchParams(location.search).get("success")

            if (isSuccessful) {
                const response = await axios.post(`${REACT_APP_SERVER_ADDRESS}/calendar/requestBooking`,
                    {
                        event_ref
                    }
                )

                const status = response.status

                switch (status) {
                    case 201:
                    case 200:
                        setMessage({
                            title: `${status} - ${response.data.title ? response.data.title : "Success!"}`,
                            text: response.data.message as string
                        })
                        break;
                    case 400:
                        setMessage({
                            title: `${status} - ${response.data.title ? response.data.title : "Failed"}`,
                            text: response.data.message as string
                        })
                }
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

    const confirmBooking = async () => {
        try {
            const event_ref = new URLSearchParams(location.search).get("event_ref")

            if (!event_ref) return setMessage({
                title: "No Booking reference",
                text: "The booking reference was not found"
            })

            const response = await axios.post(`${REACT_APP_SERVER_ADDRESS}/calendar/confirmBooking`, {
                event_ref
            })

            const status = response.status

            console.log(status)

            switch (status) {
                case 200:
                    setMessage({
                        title: `${status} - ${response.data.title ? response.data.title : "Success"}`,
                        text: response.data.message
                    })
            }
        } catch (e) {
            console.error(e)
            const response = e.response
            const status = response.status

            switch(status) {
                case 404:
                case 403:
                case 400:
                    setMessage({
                        title: `${status} - ${response.data.title ? response.data.title : "Failed"}`,
                        text: response.data.message
                    })
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
            case "/booking-payment":
                requestBooking()
                break
            case "/appointment-confirmed":
                confirmBooking()
                break
            case "/purchase-confirmed":
                confirmPurchase()
                break
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