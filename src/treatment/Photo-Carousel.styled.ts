import { Console } from 'console';
import styled from 'styled-components';

interface Props {
    activeIndex: number;
    numberOfItems: number;
}

const CAROUSEL_IMAGE_HEIGHT = 60;
const CAROUSEL_IMAGE_WIDTH = 20;
const CAROUSEL_IMAGE_MARGIN_WIDTH = 3;

const positionToChange = CAROUSEL_IMAGE_WIDTH + CAROUSEL_IMAGE_MARGIN_WIDTH * 2;

const indexPostions: { [key: number]: number } = {
    0: positionToChange * 2,
    1: positionToChange,
    2: 0,
    3: -positionToChange,
    4: -positionToChange * 2,
};

const styles = styled.section`
    position: relative;
    width: 100%;
    padding: 4vh 0 4vh 0;

    .photo-carouse-container {
        position: relative;
        width: 100%;
        height: ${CAROUSEL_IMAGE_HEIGHT * 1.25}vh;
        overflow: hidden;
    }

    .photo-carousel-flex {
        position: absolute;
        transform: translateX(
            -${CAROUSEL_IMAGE_WIDTH - CAROUSEL_IMAGE_MARGIN_WIDTH}vw
        );
        height: ${CAROUSEL_IMAGE_HEIGHT * 1.2}vh;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        transition: all ease-in-out 1.2s;
    }

    ${(props: Props) => {
        let carouselClasses = ``;

        for (let i = 0; i < props.numberOfItems; i++) {
            carouselClasses =
                carouselClasses +
                `
                .position-flex-${i} {
                    left: ${indexPostions[i]}vw;
                    transition: all ease .3s;
                };
            `;
        }

        return carouselClasses;
    }};

    .label-card-aside {
        position: absolute;
        left: -1vw;
        width: 100%;
        top: 87.5%;
    }

    .label-card-div {
        position: relative;
        width: 80%;
    }

    .photo-carousel-article {
        position: relative;
        width: ${CAROUSEL_IMAGE_WIDTH}vw;
        height: ${CAROUSEL_IMAGE_HEIGHT}vh;
        margin: 0 ${CAROUSEL_IMAGE_MARGIN_WIDTH}vw;
        user-select: none;
    }

    .main {
        width: ${CAROUSEL_IMAGE_WIDTH * 1.2}vw;
        height: ${CAROUSEL_IMAGE_HEIGHT * 1.2}vh;
        transition: all ease-in-out 0.3s;
    }

    .secondary {
        transition: all ease-in-out 0.3s;
    }

    .photo-carousel-arrows-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .photo-carousel-arrows {
        position: relative;
        bottom: 0;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .left-arrow,
    .right-arrow {
        transform: scale(1);
        transition: all 0.3s ease-in-out;
    }

    .left-arrow:hover,
    .right-arrow:hover {
        cursor: pointer;
        transform: scale(1.3);
        transition: all 0.3s ease-in-out;
    }
`;

export default styles;
