import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.footer`
    width: 100vw;
    padding: 15px;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0) 100%);
    background-color: ${colors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors['dark-gray']};

    .footer-padding {
        width: 100%;
        max-width: 1366px;
        padding: 0 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .top-section {
        width: 100%;
        height: 100px;
    }

    .logo-image {
        height: 100%;
    }

    .middle-section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .left-corner {
        width: 20%;
    }

    .text-under-logo {
        font-size: 18px;
        margin: 0;
        padding: 0;
        font-weight: 300;
    }

    .color-text-under-logo {
        margin: 10px 0;
        color: ${colors.purple};
    }


    .right-text,
    .bottom-text {
        font-weight: 300;
    }

    .right-text {
        text-align: right;
    }

    .horizontal-rule {
        width: 100%;
        border: none;
        background-color: ${colors['light-gray']};
        height: 1px;
    }

    .bottom-section {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .social-midia-wrapper {
        width: 15%;
        display: flex;
        justify-content:space-between;
        align-items: center;
    }

    @media(max-width: 875px) {
        padding: 0;

        .footer-padding {
            padding: 20px 0;
        }

        .top-section {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .middle-section {
            text-align: center;
            flex-direction: column;
        }

        .left-corner,
        .bottom-section {
            width: 85%;
        }

        .bottom-text {
            text-align: center;
        }

        .right-text {
            text-align: center;
        }

        .bottom-section {
            flex-direction: column;
        }

        .social-midia-wrapper {
            width: 50%;
        }
    }
`

export default styles