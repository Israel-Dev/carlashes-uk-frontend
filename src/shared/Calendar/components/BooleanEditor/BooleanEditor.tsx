import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

const BooleanEditor = (props: any) => (
    <AppointmentForm.BooleanEditor
        className="event-checkboxes"
        {...props}
        readOnly
    />
);

export default BooleanEditor;
