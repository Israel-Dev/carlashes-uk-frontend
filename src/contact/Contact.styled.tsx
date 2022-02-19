import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';
import { gradientHeight } from '../shared/Gradient.styled';

const styles = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .contact-padding {
        padding: ${gradientHeight / 2.6}px 0 ${gradientHeight / 3}px 0;
        width: 100%;
        max-width: 1366px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .contact-container {
        color: white;
        height: 300px;
        width: 100%;
        border-radius: ${BorderRadius.medium};
        background: ${colors['purple-gradient']};
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .contact-article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .split-bar {
        background-color: white;
        height: 75%;
        width: 1px;
    }

    .article-href {
        color: white;
        text-decoration: underline;
    }

    .article-paragraph {
        font-weight: 200;
        margin: 10px 0;
    }

    .article-span {
        font-size: 1.3em;
        font-weight: 300;
    }

    .contact-footer {
        margin: 3% 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .contact-footer-paragraph {
        font-weight: 200;
    }

    @media (max-width: 875px) {
        .contact-padding {
            padding: ${gradientHeight / 2.6}px 0 ${gradientHeight / 6}px 0;
        }

        .contact-container {
            width: 90%;
            min-height: 600px;
            padding: 10% 0;
            flex-direction: column;
        }

        .split-bar {
            height: 1px;
            width: 75%;
        }

        .contact-footer {
            width: 90%;
            text-align: center;
        }
    }
`;

export default styles;
