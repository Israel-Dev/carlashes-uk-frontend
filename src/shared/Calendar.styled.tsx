import styled, { keyframes } from 'styled-components'
import colors from '../utils/colors'

const WobbleAnimation = keyframes`
    from {
        transform: translateY(0%) rotate(-7deg);
    }

    to {
        transform: translateY(-20%) rotate(25deg);
    }
`

const styles = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .calendar-padding {
        width: 100%;
        max-width: 1366px;
        padding: 0 10%;
    }

    .makeStyles-appointment {
        background-color: red;
    }

    .dx-scheduler-cell-sizes-horizontal {
        height: 25px;
    }

    .dx-scheduler-cell-sizes-vertical {
        height: 10px;
    }

    .event-checkboxes {
        display: none;
    }

    .wobble {
        animation: ${WobbleAnimation} 1s ease-in-out infinite alternate;
    }

    .form-wrapper {
        width: 100%;
        padding: 0 5%;
    }

    .date-picker-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    }

    .date-picker-article {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .date-picker {
        margin: 0;
    }

    .MuiButton-text {
        opacity: 1;
        background-color: ${colors.purple};
        color: white
    }

    .MuiButton-text:disabled {
        opacity: .5;
        color: white;
    }

    .MuiButton-text:hover {
        border: solid 1px ${colors['alpha-gray']};
        background-color: white;
        color: ${colors.purple};
    }

    .MuiInputBase-input {
        background-color: white;
    }

    .MuiInputBase-input::placeholder {
        color: ${colors.gray};
        opacity: 1;
    }

    /* .text-input-form {
        background-color: red !important;
    } */
`

export default styles