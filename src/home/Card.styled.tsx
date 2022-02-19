import styled from 'styled-components';
import { colors } from '../utils/stylesheet';

export const desktopCardWidth = 280;

const styles = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all ease-in-out 0.3s;

    /* :hover {
        cursor: pointer;
        padding-bottom: 20px;
        transition: all ease-in-out .3s;
    } */

    .card-image-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .card-image {
        min-height: 500px;
        width: ${`${desktopCardWidth}px`};
        object-fit: cover;
        border-radius: 140px 140px 0 0;
    }

    .card-label-background {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 45px;
        background-color: rgba(255, 255, 255, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .label-text {
        text-align: center;
        margin: 0;
    }

    .card-text-background {
        background-color: ${colors.pink};
    }

    .text {
        font-weight: 200;
        text-align: center;
    }
`;

export default styles;
