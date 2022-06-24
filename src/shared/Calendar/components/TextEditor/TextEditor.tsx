import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

const TextEditor = (props: any) => {
    if (props.type === 'multilineTextEditor') {
        return null;
    }
    return <AppointmentForm.TextEditor {...props} />;
};

export default TextEditor;
