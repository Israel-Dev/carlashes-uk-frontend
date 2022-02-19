import styled, { css, keyframes } from 'styled-components';
import { colors } from '../utils/stylesheet';

interface IStyleProps {
    left: number;
}

export const cardMargin = 15;

const styles = styled.section`
    position: relative;
    height: 850px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    :after {
        content: '';
        background-color: ${colors['light-gray']};
        width: 80vw;
        height: 1px;
    }

    .card-carousels {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        position: absolute;
        top: 0;
    }

    .card-carousels .card-wrapper {
        margin-right: ${cardMargin}px;
    }

    .card-carousel-arrows-wrapper {
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left-arrow {
        padding-left: 40px;
        transition: all ease-in-out 0.3s;
    }

    .right-arrow {
        margin-right: 40px;
        transition: all ease-in-out 0.3s;
    }

    .left-arrow:hover,
    .right-arrow:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: all ease-in-out 0.3s;
    }
`;

export default styles;
