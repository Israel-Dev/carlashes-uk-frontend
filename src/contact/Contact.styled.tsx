import styled from 'styled-components'
import { gradientHeight } from '../shared/Gradient.styled'
import colors from '../utils/colors'

const styles = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .contact-padding {
        padding: ${gradientHeight / 2.6}px 0;
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
        border-radius: 10px;
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
`

export default styles