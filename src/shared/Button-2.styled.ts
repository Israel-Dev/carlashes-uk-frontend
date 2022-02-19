import styled from 'styled-components';
import { colors } from '../utils/stylesheet';

const styles = styled.button`
    background-color: ${(props: { isReverse: boolean | undefined }) =>
        props.isReverse ? colors.purple : 'white'};
    color: ${(props: { isReverse: boolean | undefined }) =>
        props.isReverse ? 'white' : colors.purple};
    border: solid 1px ${colors['dark-gray']};
    transition: all ease-in-out 0.15s;
    outline: none;

    :hover {
        cursor: pointer;
        background-color: ${(props: { isReverse: boolean | undefined }) =>
            props.isReverse ? 'white' : colors.purple};
        color: ${(props: { isReverse: boolean | undefined }) =>
            props.isReverse ? colors.purple : 'white'};
        transition: all ease-in-out 0.15s;
    }

    :active {
        background-color: white;
        color: ${colors.purple};
        border: solid 1px ${colors['dark-gray']};
    }

    .label {
        margin: 0;
        padding: 5px 15px;
    }
`;

export default styles;
