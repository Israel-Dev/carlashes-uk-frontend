import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';

const styles = styled.section`
    position: relative;

    .gallery-header-title-mobile {
        display: none;
    }

    .gallery-image-article {
        position: relative;
        width: 30vw;
    }

    .gallery-image {
        width: 100%;
        height: 600px;
        object-fit: cover;
        border-radius: ${BorderRadius.large};
    }

    .visible {
        opacity: 1;
        transition: all ease-in-out 0.4s;
    }

    .hidden {
        opacity: 0;
        transition: all ease-in-out 0.4s;
        position: absolute;
        top: 0;
        left: 0;
    }

    .dots-footer {
        position: relative;
        padding: 20px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 875px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .hidden {
            top: auto;
            left: auto;
        }

        .hidden,
        .visible {
            transition: all ease-in-out 0.1s;
        }

        .gallery-header-title-mobile {
            display: flex;
            width: 85%;
            font-size: 0.7em;
        }

        .gallery-image-article {
            width: 90%;
        }
    }
`;

export default styles;
