import styled from 'styled-components';
import { colors } from '../utils/stylesheet';

const styles = styled.section`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: ${(props: { reverse: boolean }) =>
        props.reverse ? 'row-reverse' : 'row'};

    .headline-aside {
        position: relative;
        height: 100%;
        width: 50%;
        overflow: hidden;
    }

    .treatment-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .headline-article {
        height: 100%;
        width: 50%;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        background-color: ${colors.pink};
        text-align: ${(props: { reverse: boolean }) =>
            props.reverse ? 'right' : 'left'};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .headline-article-padding {
        padding: 0 30px;
    }

    .headline-paragraph {
        color: white;
    }

    .headline-title {
        font-style: italic;
    }

    .headline-title:hover {
        cursor: pointer;
    }

    .headline-description {
        font-weight: 200;
    }

    .headline-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .treatment-image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        transition: all 0.5s ease-in-out;
    }

    .hidden {
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }

    @media (max-width: 875px) {
        flex-direction: column;
        height: auto;

        .headline-aside {
            height: 400px;
            width: 100%;
        }

        .headline-article {
            width: 100%;
            text-align: center;
        }

        .headline-title {
            font-size: 1.5em;
        }

        .headline-description {
            font-size: 0.9em;
        }

        .headline-footer {
            height: 150px;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
`;

export default styles;
