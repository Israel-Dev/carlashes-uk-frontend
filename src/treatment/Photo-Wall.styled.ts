import styled from 'styled-components';
import { colors } from 'utils/stylesheet';

const leftMargin = '10vw';

const imgHeight = 8;

const styles = styled.section`
    position: relative;
    width: 100vw;
    padding: 425px 0 520px 0;
    background: ${colors.pink};
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    background-color: ${colors.pink};
    overflow: hidden;

    .photo-wall-article {
        user-select: none;
    }

    .photo-wall-img {
        width: 30vw;
        min-width: 200px;
        object-fit: cover;
    }

    .article-item-0 {
        position: absolute;
        top: 5vw;
        left: ${leftMargin};
    }

    .article-item-1 {
        position: absolute;
        top: 2vw;
        left: 38vw;
    }

    .article-item-2 {
        position: absolute;
        top: 4vw;
        left: 65vw;
    }

    .img-1 {
        height: 425px;
    }

    .img-2 {
        height: 70vh;
        min-height: 600px;
    }

    .img-3 {
        height: 390px;
    }

    .article-item-3 {
        position: absolute;
        top: 25vw;
        left: 8vw;
    }

    .article-item-4 {
        position: absolute;
        top: 27vw;
        left: 34vw;
    }

    .img-4 {
        width: 35vw;
        min-width: 400px;
        height: 35vh;
        min-height: 400px;
    }

    @media (max-width: 1600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 100px 0 100px 0;

        .photo-wall-article {
            top: 0;
            /* left: 0; */
            align-self: center;
        }

        .photo-wall-img,
        .img-4 {
            min-height: 300px;
            min-width: 75vw;
            height: 350px;
            width: 75vw;
        }

        .article-item-0,
        .article-item-1,
        .article-item-2,
        .article-item-3,
        .article-item-4 {
            position: relative;
            left: 0;
        }
    }
`;

export default styles;
