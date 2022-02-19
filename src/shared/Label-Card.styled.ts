import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';

const styles = styled.div`
    position: absolute;
    width: 100%;
    background: ${colors['purple-gradient']};
    border-radius: ${BorderRadius.small};
    padding: 20px 0 20px 25px;
    color: white;

    p {
        margin: 0;
        padding: 0;
    }
`;

export default styles;
