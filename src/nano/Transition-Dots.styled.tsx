import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.div`
    width: 10vw;
    min-width: 100px;
    display: flex;
    justify-content: space-between;

    .circle {
        height: 15px;
        width: 15px;
        background-color: ${(props: {isGray: boolean}) => props.isGray ? colors['light-gray'] : "white"};
        border-radius: 50%;
        display: inline-block;
        transition: all ease-in-out 1s;
    }

    .circle:hover {
        cursor: pointer;
        transform: scale(1.3);
        transition: all ease-in-out .3s;
    }

    .active {
        background-color: ${colors.purple};
        transition: all ease-in-out 1s;
    }

    .active:hover {
        transform: none;
        cursor: auto;
    }
`

export default styles