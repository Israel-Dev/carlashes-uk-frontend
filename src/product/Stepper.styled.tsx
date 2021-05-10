import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.article`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;

    .stepper-container {
        /* width: 150px; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .box {
        width: 35px;
        height: 35px;
        border: solid 1px ${colors['light-gray']};
        /* background-color: ${colors['light-gray']}; */
        background-color: ${colors.purple};
        color: white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    .center {
        background-color: white;
        color: ${colors['dark-gray']};
    }

    .box:hover:not(.center) {
        cursor: pointer;
    }

    .box:active:not(.center) {
        background-color: ${colors['dark-gray']};
        color: white;
    }
`

export default styles