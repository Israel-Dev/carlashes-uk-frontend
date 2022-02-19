import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';

const styles = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon-circle {
        width: 65px;
        height: 65px;
        padding: 10px;
        border-radius: ${BorderRadius.half};
        background-color: ${colors.purple};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-circle-paragraph {
        text-align: center;
        font-weight: 200;
    }
`;

export default styles;
