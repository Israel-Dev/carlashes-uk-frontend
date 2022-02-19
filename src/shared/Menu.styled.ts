import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';

const Styles = styled.nav`
    position: absolute;
    width: 100%;
    padding-top: 20px;
    min-height: 125px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

    .menu-options-wrapper-mobile,
    .menu-icon {
        display: none;
    }

    .menu-option {
        color: white;
        cursor: pointer;
        user-select: none;
        transition: all ease-in-out 0.2s;
    }

    .menu-option:hover {
        background-color: white;
        border-radius: ${BorderRadius.medium};
        padding: 10px;
        color: ${colors.purple};
        transform: scale(1.2);
        transition: all ease-in-out 0.2s;
    }

    .menu-list {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    @media (max-width: 875px) {
        /* margin-top: 20px; */
        padding-top: 0;
        justify-content: flex-start;
        z-index: 50;

        .menu-icon:hover {
            cursor: pointer;
        }

        .menu-padding {
            margin: 20px 0;
            max-width: 80vw;
            justify-content: space-between;
        }

        .menu-icon-wrapper-mobile {
            display: block;
        }

        .menu-options-wrapper {
            display: none;
        }

        .menu-options-wrapper-mobile,
        .menu-icon {
            display: block;
        }

        .menu-options-wrapper-mobile {
            max-height: 0;
            overflow: hidden;
            transition: all ease-in-out 0.3s;
            width: 100%;
            background-color: ${colors['dark-brown']};
        }

        .open {
            max-height: 300px;
            transition: all ease-in-out 0.3s;
        }

        .menu-list {
            flex-direction: column;
            width: 100%;
            padding: 0;
            margin: 0;
        }

        .menu-option {
            border-bottom: white solid 1px;
            width: 100%;
            padding: 15px 0;
            text-align: center;
        }
    }
`;

export default Styles;
