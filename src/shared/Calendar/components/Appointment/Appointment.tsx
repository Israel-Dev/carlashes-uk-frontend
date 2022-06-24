import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';

const Appointment = ({ children, style, data, ...restProps }: any) => {
    return (
        <Appointments.Appointment
            {...restProps}
            style={{
                ...style,
                backgroundColor: data.color,
            }}
            onDoubleClick={null}
        >
            {children}
        </Appointments.Appointment>
    );
};

export default Appointment;
