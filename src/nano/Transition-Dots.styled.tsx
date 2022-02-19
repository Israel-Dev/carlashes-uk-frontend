import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';

const styles = styled.div`
    width: 10vw;
    min-width: 220px;
    display: flex;
    justify-content: space-between;

    .circle {
        height: 15px;
        width: 15px;
        background-color: ${(props: { isGray: boolean }) =>
            props.isGray ? colors['light-gray'] : 'white'};
        border-radius: ${BorderRadius.half};
        display: inline-block;
        transition: all ease-in-out 1s;
    }

    .circle:hover {
        cursor: pointer;
        transform: scale(1.3);
        transition: all ease-in-out 0.3s;
    }

    .active {
        background-color: ${colors.purple};
        transition: all ease-in-out 1s;
    }

    .active:hover {
        transform: none;
        cursor: auto;
    }

    @media (max-width: 875px) {
        min-width: 200px;
    }
`;

export default styles;
