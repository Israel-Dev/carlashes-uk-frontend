import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.article`
    .price-span {
        font-weight: 600;
        font-size: 1.5em;
        color: ${colors.purple};
    }

    @media(max-width: 875px) {
        .price-span {
            font-size: 2em;
        }
    }
`

export default styles