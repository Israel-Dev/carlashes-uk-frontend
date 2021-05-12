import styled from 'styled-components'
import colors from '../utils/colors'

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
        margin: 150px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .about-logo {
        filter: invert(19%) sepia(12%) saturate(5897%) hue-rotate(229deg) brightness(60%) contrast(98%);
    }

    .about-paragraph {
        font-weight: 200;
        font-style: italic;
        font-size: 35px;
        text-align: center;
        color: ${colors.purple};
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
        margin: 5%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .about-icon-article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .icon-circle {
        width: 65px;
        height: 65px;
        padding: 10px;
        border-radius: 50%;
        background-color: ${colors.purple};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default styles