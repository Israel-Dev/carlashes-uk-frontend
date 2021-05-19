import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.main`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: ${colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default styles