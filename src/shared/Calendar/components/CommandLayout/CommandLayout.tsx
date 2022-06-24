import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

const CommandLayout = (props: any, isValidRequest: boolean) => (
    <AppointmentForm.CommandLayout
        {...props}
        disableSaveButton={!isValidRequest}
        hideDeleteButton={true}
        className="command-wrapper"
    />
);

export default CommandLayout;
