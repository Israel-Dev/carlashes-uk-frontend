import styled from 'styled-components'
import colors from '../utils/colors'

const Styles = styled.nav`
    position: absolute;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    font-family: 'Philosopher', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: white;
    z-index: 10;
    user-select: none;

    .main-logo-wrapper,
    .logo-img {
        height: 100%;
        max-height: 75px;
    }

    .menu-padding {
        width: 100%;
        max-width: 1366px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }

    .menu-options-wrapper {
        width: 80vw;
    }

    .menu-option {
        color: white;
        user-select: none;
        transition: all ease-in-out .2s;
    }

    .menu-option:hover {
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        color: ${colors.purple};
        transform: scale(1.2);
        transition: all ease-in-out .2s;
    }

    .menu-list {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`

export default Styles