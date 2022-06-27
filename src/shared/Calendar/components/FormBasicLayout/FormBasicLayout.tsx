import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import validator from 'validator';
import { RadioGroup } from '../RadioGroup';
import { RadioContainer } from './FormBasicLayout.styled';

const { REACT_APP_SERVER_ADDRESS } = process.env;

const FormBasicLayout = (
    { onFieldChange, appointmentData, ...restProps }: any,
    callback: Function,
    activeTreatment?: string,
    treatmentSubTypeRef?: string
) => {
    const onCustomFieldChange = useCallback(
        (nextValue: string | number | Date, field: string) => {
            onFieldChange({ [field]: nextValue });
        },
        []
    );

    const hasField = (field: string) => {
        if (appointmentData[field]) return true;
        return false;
    };

    const hasAllFields = () => {
        console.log('appointmentData', appointmentData);
        if (
            hasField('clientName') &&
            hasField('startDate') &&
            hasField('endDate') &&
            hasField('subTreatmentRef') &&
            hasField('treatmentType') &&
            hasField('email') &&
            validator.isEmail(appointmentData.email) &&
            hasField('phoneNumber') &&
            appointmentData.phoneNumber.length >= 9
        )
            return true;
    };

    const [treatments, setTreatments] = useState<
        {
            name: string;
            price: string;
            ref: string;
            subTypeRef: string;
            schedulePrice: string;
        }[]
    >([]);

    useEffect(() => {
        getTreatments();
    }, []);

    const getTreatments = async () => {
        try {
            const fetchedTreatments: {
                name: string;
                schedulePrice: string;
                subTypes: {
                    name: string;
                    price: string;
                    ref: string;
                }[];
            }[] = (
                await axios.get(
                    `${REACT_APP_SERVER_ADDRESS}/calendar/getTreatments${
                        activeTreatment
                            ? `?treatmentRef=${activeTreatment}`
                            : ''
                    }`
                )
            )?.data;

            const treatments: {
                name: string;
                price: string;
                ref: string;
                subTypeRef: string;
                schedulePrice: string;
            }[] = [];

            fetchedTreatments.forEach((treatment) => {
                treatment.subTypes.forEach((subType) => {
                    treatments.push({
                        name: `${treatment.name} - ${subType.name}`,
                        price: subType.price,
                        ref: subType.ref,
                        subTypeRef: subType.ref,
                        schedulePrice: treatment.schedulePrice,
                    });
                });
            });

            setTreatments(treatments);

            if (!appointmentData?.subTreatmentRef)
                onFieldChange({
                    subTreatmentRef: treatments.find(
                        (treatment) =>
                            treatment.subTypeRef === treatmentSubTypeRef
                    )?.subTypeRef
                        ? treatments.find(
                              (treatment) =>
                                  treatment.subTypeRef === treatmentSubTypeRef
                          )?.subTypeRef
                        : treatments[0].ref,
                });
        } catch (e) {
            console.error(e);
        }
    };

    // Treatment options
    const options = treatments.map((treatment, i) => ({
        id: treatment.ref,
        text: `${treatment.name} | Booking Price: £${treatment.schedulePrice}`,
    }));

    useEffect(() => {
        if (hasAllFields()) return setTimeout(() => callback(true), 1500);
        return callback(false);
    });

    const [selectInitialValue, setSelectInitialValue] = useState('');

    useEffect(() => {
        if (!appointmentData.subTreatmentRef && treatments.length) {
            setSelectInitialValue(options[0].id);
        }
    }, [treatments, options, appointmentData.subTreatmentRef]);

    return (
        <div className="form-wrapper">
            <AppointmentForm.Label text="Name" type="titleLabel" />
            <AppointmentForm.TextEditor
                className="text-input-form"
                type="ordinaryTextEditor"
                readOnly={false}
                placeholder="Your Name"
                value={appointmentData.clientName}
                onValueChange={(newValue) =>
                    onCustomFieldChange(newValue, 'clientName')
                }
            />
            <div className="date-picker-wrapper">
                <article className="date-picker-article">
                    <AppointmentForm.Label
                        text="Start time"
                        type="titleLabel"
                    />
                    <AppointmentForm.DateEditor
                        value={appointmentData.startDate}
                        onValueChange={(newValue) =>
                            onCustomFieldChange(newValue, 'startDate')
                        }
                        className="date-picker"
                    />
                </article>
                <article className="date-picker-article">
                    <AppointmentForm.Label text="End time" type="titleLabel" />
                    <AppointmentForm.DateEditor
                        value={appointmentData.endDate}
                        onValueChange={(newValue) =>
                            onCustomFieldChange(newValue, 'endDate')
                        }
                        className="date-picker"
                        // disabled={true}
                    />
                </article>
            </div>
            <AppointmentForm.Label text="Desired Treatment" type="titleLabel" />
            <AppointmentForm.Select
                value={
                    !appointmentData.subTreatmentRef
                        ? selectInitialValue
                        : appointmentData.subTreatmentRef
                }
                type="outlinedSelect"
                onValueChange={(newValue) =>
                    onCustomFieldChange(newValue, 'subTreatmentRef')
                }
                availableOptions={options}
            />
            <RadioContainer>
                <RadioGroup
                    value={appointmentData.treatmentType}
                    onCustomFieldChange={onCustomFieldChange}
                />
            </RadioContainer>
            <AppointmentForm.Label text="Email" type="titleLabel" />
            <AppointmentForm.TextEditor
                type="ordinaryTextEditor"
                readOnly={false}
                placeholder="youremail@example.com"
                value={appointmentData.email}
                onValueChange={(newValue) =>
                    onCustomFieldChange(newValue, 'email')
                }
            />
            <AppointmentForm.Label text="Phone Number" type="titleLabel" />
            <AppointmentForm.TextEditor
                type="ordinaryTextEditor"
                placeholder="+44 123 456 890"
                readOnly={false}
                value={appointmentData.phoneNumber}
                onValueChange={(newValue) =>
                    onCustomFieldChange(newValue, 'phoneNumber')
                }
            />
        </div>
    );
};

export default FormBasicLayout;
