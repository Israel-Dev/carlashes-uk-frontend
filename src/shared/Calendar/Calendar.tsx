import React, { SyntheticEvent, useCallback } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Styles from './Calendar.styled';
import Paper from '@material-ui/core/Paper';
import {
    ViewState,
    EditingState,
    EditingStateProps,
    ChangeSet,
    FormatterFn,
} from '@devexpress/dx-react-scheduler';
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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Modal from '../Modal';
import { colors } from '../../utils/stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaperPlane,
    faTimesCircle,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';
import { loadStripe } from '@stripe/stripe-js';
import {
    Appointment,
    CommandLayout,
    RadioGroup,
    Select,
    TextEditor,
} from './components';
import FormBasicLayout from './components/FormBasicLayout/FormBasicLayout';

const { REACT_APP_SERVER_ADDRESS, REACT_APP_STRIPE_PUBLIC_KEY } = process.env;

const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY as string);

const purpleTheme = createMuiTheme({
    palette: {
        primary: {
            // light: //will be calculated from palette.primary.main,
            main: colors.purple,
            // dark: //will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: colors.purple,
            // dark: will be calculated from palette.secondary.main,
        },
        success: {
            main: colors.purple,
        },
        error: {
            main: colors.purple,
        },
        warning: {
            main: colors.purple,
        },
    },
});

const BooleanEditor = (props: any) => (
    <AppointmentForm.BooleanEditor
        className="event-checkboxes"
        {...props}
        readOnly
    />
);

const DayTimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
    return <DayView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

const WeekTimeTableCell = ({ onDoubleClick, ...restProps }: any) => {
    return <WeekView.TimeTableCell onClick={onDoubleClick} {...restProps} />;
};

interface CalendarProps {
    activeTreatment?: string;
    treatmentSubTypeRef?: string;
}

const Calendar = ({ activeTreatment, treatmentSubTypeRef }: CalendarProps) => {
    const [currDate, setCurrDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState<boolean | null>(false);
    const [modalMessage, setModalMessage] = useState('');

    const getEvents = async () => {
        try {
            const events = (
                await axios.get(
                    `${REACT_APP_SERVER_ADDRESS}/calendar/getEvents`
                )
            )?.data.items.map((event: any) => {
                return {
                    startDate:
                        new Date(event?.start?.dateTime) || event?.start?.date,
                    endDate: new Date(event?.end?.dateTime) || event?.end?.date,
                    title: event?.summary,
                    color: colors.purple,
                };
            });

            setEvents(events);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    const payBooking = async (e: ChangeSet) => {
        try {
            const stripe = await stripePromise;

            console.log('e.added', e.added);
            const payload = {
                ...e.added,
                treatment: 'C03DceR3Tn',
            };

            const response = await axios.post(
                `${REACT_APP_SERVER_ADDRESS}/calendar/payBooking`,
                payload
            );

            if (response.status === 200) {
                await stripe?.redirectToCheckout({
                    sessionId: response.data.sessionID,
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const requestEvent = async (e: ChangeSet) => {
        try {
            const response = await axios.post(
                `${REACT_APP_SERVER_ADDRESS}/calendar/requestEvent`,
                { ...e.added }
            );

            if (response.status === 201) {
                setShowModal(true);
                setModalMessage(response.data.message);
            }
        } catch (e) {
            console.error(e);
            setModalMessage(e.response.data.message);
            setShowModal(null);
        }
    };

    const [isValidReq, setIsValidReq] = useState(false);

    const modalTitle: { [key: string]: string } = {
        null: 'An Error Ocured',
        true: 'Request made',
    };

    const modalIcons: { [key: string]: IconDefinition } = {
        null: faTimesCircle,
        true: faPaperPlane,
    };

    const modalMessageObj: { [key: string]: string } = {
        null: 'It was not possible to make your appointment request',
        true: "You'll be contacted by email or phone number confirming the appointment",
    };

    const hideModal = () => {
        setShowModal(false);
        setIsValidReq(false);
    };

    return (
        <Styles className="calendar-wrapper">
            <Modal
                isVisible={showModal}
                title={
                    showModal && (
                        <>
                            <FontAwesomeIcon
                                icon={modalIcons[`${showModal}`]}
                                className="wobble"
                            />
                            {modalTitle[`${showModal}`]}
                        </>
                    )
                }
                message={
                    !modalMessage
                        ? modalMessageObj[`${showModal}`]
                        : modalMessage
                }
                buttonLabel="Ok!"
                hideModalCallback={hideModal}
            />
            <div className="calendar-padding">
                <ThemeProvider theme={purpleTheme}>
                    <Paper>
                        <Scheduler data={events}>
                            <ViewState
                                currentDate={currDate}
                                defaultCurrentViewName="Week"
                                onCurrentDateChange={(newCurrDate) =>
                                    setCurrDate(newCurrDate)
                                }
                            />
                            <WeekView
                                excludedDays={[0]}
                                startDayHour={9}
                                endDayHour={23}
                                cellDuration={60}
                                timeTableCellComponent={WeekTimeTableCell}
                            />
                            <EditingState onCommitChanges={payBooking} />
                            <DayView
                                startDayHour={9}
                                endDayHour={23}
                                timeTableCellComponent={DayTimeTableCell}
                            />
                            <Toolbar />
                            <DateNavigator />
                            <TodayButton />
                            <ViewSwitcher />
                            <Appointments appointmentComponent={Appointment} />
                            <AppointmentForm
                                onVisibilityChange={(isVisible) => {
                                    if (!isVisible) setIsValidReq(false);
                                }}
                                commandLayoutComponent={(props) => {
                                    console.log(
                                        'props',
                                        props.onCommitButtonClick
                                    );
                                    return CommandLayout(props, isValidReq);
                                }}
                                booleanEditorComponent={BooleanEditor}
                                basicLayoutComponent={(props) =>
                                    FormBasicLayout(
                                        props,
                                        setIsValidReq,
                                        activeTreatment,
                                        treatmentSubTypeRef
                                    )
                                }
                                textEditorComponent={TextEditor}
                                selectComponent={Select}
                                messages={{
                                    detailsLabel: 'Appointment Information',
                                    titleLabel: 'Your Name',
                                    commitCommand: 'Resquest Appointment',
                                    moreInformationLabel: 'Details',
                                }}
                            />
                        </Scheduler>
                    </Paper>
                </ThemeProvider>
            </div>
        </Styles>
    );
};

export default Calendar;
