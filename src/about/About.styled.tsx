import styled from 'styled-components';
import { colors } from '../utils/stylesheet';

const styles = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .about-padding {
        width: 100%;
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-header {
        margin: 150px 0 75px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .about-logo {
        margin-top: 5vh;
        width: 40vw;
        filter: invert(19%) sepia(12%) saturate(5897%) hue-rotate(160deg)
            brightness(60%) contrast(98%);
    }

    .about-paragraph {
        font-weight: 200;
        font-style: italic;
        font-size: 35px;
        text-align: center;
        color: ${colors.purple};
    }

    .about-article {
        margin: 3% 0;
    }

    .about-article-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .about-article-paragraph {
        text-align: center;
        font-weight: 200;
    }

    .about-article-footer {
        margin: 0%;
        margin-top: 3%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    @media (max-width: 875px) {
        .about-header {
            margin: 150px 0 0 0;
        }

        .about-logo {
            max-height: 250px;
        }

        .about-paragraph {
            width: 85%;
            font-size: 1.3em;
        }

        .about-section {
            width: 100%;
        }

        .about-article {
            margin: 5% 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .about-article-section {
            width: 85%;
        }

        .about-article-footer {
            flex-direction: column;
        }
    }
`;

export default styles;
