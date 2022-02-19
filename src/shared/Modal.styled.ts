import styled from 'styled-components';
import { BorderRadius, colors } from 'utils/stylesheet';

const styles = styled.section`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 50;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ${(props: { isVisible: boolean | null }) =>
        props.isVisible || props.isVisible === null
            ? `
        visibility: visible;
        `
            : null}

    .modal {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* background-color: ${colors.pink}; */
        background-color: ${colors['alpha-pink']};
        transition: all ease-in-out 0.3s;
        opacity: 0;
    }

    .modal-box {
        width: 30vw;
        min-width: 250px;
        max-width: 475px;
        padding-bottom: 25px;
        background-color: white;
        border-radius: ${BorderRadius.small};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        background-color: ${colors.pink};
    }

    .visible {
        transition: all ease-in-out 0.3s;
        opacity: 1;
    }

    .title {
        border-radius: ${BorderRadius.small} ${BorderRadius.small} 0 0;
        width: 100%;
        margin: 0;
        padding: 40px 0 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        /* border-bottom: 1px solid ${colors.purple}; */
        color: ${colors.purple};
        background-color: white;
    }

    .paragraph {
        font-weight: 200;
    }

    @media (max-width: 875px) {
        .modal-box {
            width: 85%;
        }
    }
`;

export default styles;
