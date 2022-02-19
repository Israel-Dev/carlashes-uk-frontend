import Styles from './Label-Card.styled';

interface Props {
    label: string;
}

const LabelCard = ({ label }: Props) => {
    return (
        <Styles className="label-car-wrapper">
            <p>{label}</p>
        </Styles>
    );
};

export default LabelCard;
