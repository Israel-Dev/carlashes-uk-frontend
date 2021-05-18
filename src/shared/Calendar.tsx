import React, { SyntheticEvent } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Styles from './Calendar.styled'
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, EditingStateProps, ChangeSet } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    Appointments,
    WeekView,
    ViewSwitcher,
    Toolbar,
    DateNavigator,
    TodayButton,
    AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Modal from './Modal'
import colors from '../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import validator from 'validator'

const REACT_APP_SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS

const purpleTheme = createMuiTheme({
    palette: {
        primary: {
            // light: //will be calculated from palette.primary.main,
            main: colors.purple,
            // dark: //will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: colors.purple
            // dark: will be calculated from palette.secondary.main,
        },
        success: {
            main: colors.purple
        },
        error: {
            main: colors.purple
        },
        warning: {
            main: colors.purple
        }
    },
});

const Appointment = ({ children, style, data, ...restProps }: any) => {
    return <Appointments.Appointment
        {...restProps}
        style={{
            ...style,
            backgroundColor: data.color
        }}
        onDoubleClick={null}
    >
        {children}
    </Appointments.Appointment>
}

const CommandLayout = (props: any, isValidRequest: boolean) => (
    <AppointmentForm.CommandLayout
        {...props}
        disableSaveButton={!isValidRequest}
        hideDeleteButton={true}
        className="command-wrapper"
    />
)

const BooleanEditor = (props: any) => <AppointmentForm.BooleanEditor className="event-checkboxes" {...props} readOnly />

const Select = (props: any) => <AppointmentForm.Select {...props} />

const TextEditor = (props: any) => {
    if (props.type === 'multilineTextEditor') {
        return null
    } return <AppointmentForm.TextEditor {...props} />
}

const FormBasicLayout = ({ onFieldChange, appointmentData, ...restProps }: any, callback: Function) => {
    const onCustomFieldChange = (nextValue: string | number | Date, field: string) => {
        onFieldChange({ [field]: nextValue })
    }

    const hasField = (field: string) => {
        if (appointmentData[field]) return true
        return false
    }

    const hasAllFields = () => {
        if (
            hasField("clientName") &&
            hasField("startDate") &&
            hasField("endDate") &&
            hasField("treatment") &&
            (
                hasField("email") &&
                validator.isEmail(appointmentData.email)
            )
            &&
            (
                hasField("phoneNumber") &&
                appointmentData.phoneNumber.length >= 9
            )
        ) return true
    }

    const [treatments, setTreatments] = useState<{ name: string, price: string, ref: string }[]>([])

    useEffect(() => {
        getTreatments()

    }, [])

    const getTreatments = async () => {
        try {
            const fetchedTreatments = (await axios.get(`${REACT_APP_SERVER_ADDRESS}/calendar/getTreatments`))?.data
            setTreatments(fetchedTreatments)

            if (!appointmentData?.treatment) onFieldChange({ treatment: fetchedTreatments[0].ref })

        } catch (e) {
            console.error(e)
        }
    }

    // Fetch treatment options
    const options = treatments.map((treatment, i) => (
        { id: treatment.ref, text: treatment.name }
    ))

    // if (!appointmentData?.treatment && options.length) {
    //     onFieldChange({ treatment: options[0] && options[0].id ? options[0].id : null})
    // }

    useEffect(() => {
        if (hasAllFields()) return setTimeout(() => callback(true), 1500)
        return callback(false)
    })

    return (
        <div
            className="form-wrapper"
        >
            <AppointmentForm.Label
                text="Name"
                type="titleLabel"
            />
            <AppointmentForm.TextEditor
                className="text-input-form"
                type="ordinaryTextEditor"
                readOnly={false}
                placeholder="Your Name"
                value={appointmentData.clientName}
                onValueChange={(newValue) => onCustomFieldChange(newValue, "clientName")}
            />
            <div className="date-picker-wrapper">
                <article className="date-picker-article">
                    <AppointmentForm.Label
                        text="Start time"
                        type="titleLabel"
                    />
                    <AppointmentForm.DateEditor
                        value={appointmentData.startDate}
                        onValueChange={(newValue) => onCustomFieldChange(newValue, "startDate")}
                        className="date-picker"
                    />
                </article>
                <article className="date-picker-article">
                    <AppointmentForm.Label
                        text="End time"
                        type="titleLabel"
                    />
                    <AppointmentForm.DateEditor
                        value={appointmentData.endDate}
                        onValueChange={(newValue) => onCustomFieldChange(newValue, "endDate")}
                        className="date-picker"
                        // disabled={true}
                    />
                </article>
            </div>
            <AppointmentForm.Label
                text="Desired Treatment"
                type="titleLabel"
            />
            <AppointmentForm.Select
                value={!appointmentData.treatment ? 1 : appointmentData.treatment}
                type="outlinedSelect"
                onValueChange={(newValue) => onCustomFieldChange(newValue, "treatment")}
                availableOptions={options}
            />
            <AppointmentForm.Label
                text="Email"
                type="titleLabel"
            />
            <AppointmentForm.TextEditor
                type="ordinaryTextEditor"
                readOnly={false}
                placeholder="youremail@example.com"
                value={appointmentData.email}
                onValueChange={(newValue) => onCustomFieldChange(newValue, "email")}
            />
            <AppointmentForm.Label
                text="Phone Number"
                type="titleLabel"
            />
            <AppointmentForm.TextEditor
                type="ordinaryTextEditor"
                placeholder="+44 123 456 890"
                readOnly={false}
                value={appointmentData.phoneNumber}
                onValueChange={(newValue) => onCustomFieldChange(newValue, "phoneNumber")}
            />
        </div>
    )
}

const DayTimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
    return <DayView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

const WeekTimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
    return <WeekView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

const Calendar = () => {
    const [currDate, setCurrDate] = useState(new Date())
    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState<boolean | null>(false)
    const [modalMessage, setModalMessage] = useState("")

    const getEvents = async () => {
        try {
            const events = (await axios.get(`${REACT_APP_SERVER_ADDRESS}/calendar/getEvents`))?.data.items
                .map((event: any) => {
                    return {
                        startDate: new Date(event?.start?.dateTime) || event?.start?.date,
                        endDate: new Date(event?.end?.dateTime) || event?.end?.date,
                        title: event?.summary,
                        color: colors.purple
                    }
                })

            setEvents(events)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    const requestEvent = async (e: ChangeSet) => {
        try {
            const response = await axios.post(`${REACT_APP_SERVER_ADDRESS}/calendar/requestEvent`, { ...(e.added) })

            if (response.status === 201) {
                setShowModal(true)
                setModalMessage(response.data.message)
            }

        } catch (e) {
            console.error(e)
            setModalMessage(e.response.data.message)
            setShowModal(null)
        }
    }

    const [isValidReq, setIsValidReq] = useState(false)

    const modalTitle: { [key: string]: string } = {
        null: "An Error Ocured",
        true: "Request made"
    }

    const modalIcons: { [key: string]: IconDefinition } = {
        null: faTimesCircle,
        true: faPaperPlane
    }

    const modalMessageObj: { [key: string]: string } = {
        null: "It was not possible to make your appointment request",
        true: "You'll be contacted by email or phone number confirming the appointment"
    }

    const hideModal = () => {
        setShowModal(false)
        setIsValidReq(false)
    }

    return (
        <Styles className="calendar-wrapper">
            <Modal
                isVisible={showModal}
                title={
                    showModal &&
                    <>
                        <FontAwesomeIcon
                            icon={modalIcons[`${showModal}`]}
                            className="wobble"
                        />{modalTitle[`${showModal}`]}
                    </>
                }
                message={!modalMessage ? modalMessageObj[`${showModal}`] : modalMessage}
                buttonLabel="Ok!"
                hideModalCallback={hideModal}
            />
            <div className="calendar-padding">
                <ThemeProvider theme={purpleTheme}>
                    <Paper>
                        <Scheduler
                            data={events}
                        >
                            <ViewState
                                currentDate={currDate}
                                defaultCurrentViewName="Week"
                                onCurrentDateChange={(newCurrDate) => setCurrDate(newCurrDate)}
                            />
                            <WeekView
                                excludedDays={[0]}
                                startDayHour={9}
                                endDayHour={23}
                                cellDuration={60}
                                timeTableCellComponent={WeekTimeTableCell}
                            />
                            <EditingState
                                onCommitChanges={requestEvent}
                            />
                            <DayView
                                startDayHour={9}
                                endDayHour={23}
                                timeTableCellComponent={DayTimeTableCell}
                            />
                            <Toolbar />
                            <DateNavigator />
                            <TodayButton />
                            <ViewSwitcher />
                            <Appointments
                                appointmentComponent={Appointment}
                            />
                            <AppointmentForm
                                onVisibilityChange={(isVisible) => {
                                    if (!isVisible) setIsValidReq(false)
                                }}
                                commandLayoutComponent={(props) => CommandLayout(props, isValidReq)}
                                booleanEditorComponent={BooleanEditor}
                                basicLayoutComponent={(props) => FormBasicLayout(props, setIsValidReq)}
                                textEditorComponent={TextEditor}
                                selectComponent={Select}
                                messages={
                                    {
                                        detailsLabel: "Appointment Information",
                                        titleLabel: "Your Name",
                                        commitCommand: "Resquest Appointment",
                                        moreInformationLabel: "Details"
                                    }
                                }
                            />
                        </Scheduler>
                    </Paper>
                </ThemeProvider>
            </div>
        </Styles>
    )
}

export default Calendar