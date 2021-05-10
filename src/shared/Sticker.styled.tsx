import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.div`
    width: 150px;
    height: 150px;
    background-color: ${colors['alpha-White']};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50%;

    .number,
    .text {
        margin: 0;
        font-family: 'Philosopher', sans-serif;
    }

    .number {
        color: ${colors.purple}
    } 

    .text {
        font-size: 30px;
        color: ${colors['dark-gray']};
    }
`
export default styles