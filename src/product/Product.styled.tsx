import styled from 'styled-components'
import { gradientHeight } from '../shared/Gradient.styled'

const styles = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .product-page-padding {
        width: 100%;
        max-width: 1366px;
        padding-top: ${gradientHeight / 2.5}px;
    }

    .product-section {
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
        flex-direction: row;
    }

    .page-break {
        margin: 5% 0;
    }

    .product-recomendations {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export default styles