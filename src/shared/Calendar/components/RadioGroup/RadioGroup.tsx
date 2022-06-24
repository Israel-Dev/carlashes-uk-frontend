import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

enum TreatmentType {
    INFILL = 'infill',
    FULL_SET = 'fullset',
}

type Props = {
    onCustomFieldChange: (newValue: string, field: string) => void;
    value: TreatmentType;
};

const RadioGroup = ({ onCustomFieldChange, value }: Props) => {
    return (
        <>
            <AppointmentForm.Label
                text="Choose the type of treatment:"
                type="titleLabel"
            />
            <input
                type="radio"
                name="treatmentType"
                value={TreatmentType.INFILL}
                checked={value === TreatmentType.INFILL ? true : false}
                onChange={(elem) => {
                    const newValue = elem.target.value;
                    onCustomFieldChange(newValue, 'treatmentType');
                }}
            />{' '}
            Infill
            <br />
            <input
                type="radio"
                name="treatmentType"
                value={TreatmentType.FULL_SET}
                onChange={(elem) => {
                    const newValue = elem.target.value;
                    onCustomFieldChange(newValue, 'treatmentType');
                }}
                checked={value === TreatmentType.FULL_SET ? true : false}
            />{' '}
            FullSet
            <br />
        </>
    );
};

export default RadioGroup;
