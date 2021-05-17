import styled from 'styled-components'

const styles = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    margin: 40px;

    .mosaic-content-container {
        width: 100%;
        max-width: 1366px;
        padding: 0 10vw;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .right-side-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .image {
        border-radius: 25px;
    }

    .left-wrapper {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .center-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }

    .right-top-right,
    .main-right {
        width: 5vw;
        height: 70%;
    }

    .main-left {
        height: 700px;
        width: 5vw;
        object-fit: cover;
    }

    .top-images-wrapper,
    .bottom-images-wrapper {
        width: 98%;
        display: flex;
        justify-content: space-around;
    }

    .center-top-left {
        width: 38%;
    }

    .center-top-right {
        width: 60%;
    }

    .center-top-left,
    .center-top-right,
    .bottom-left,
    .bottom-center,
    .bottom-right,
    .right-top-right {
        height: 200px;
        object-fit: cover;
    }

    .bottom-left {
        width: 40%;
    }

    .bottom-center {
        width: 18%;
    }

    .bottom-right {
        width: 40%;
    }

    .text-wrapper {
        position: relative;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
    }

    .text-paragraph {
        width: 70%;
        text-align: center;
    }

    @media(max-width: 875px) {
        .left-side-wrapper,
        .right-side-wrapper,
        .center-top-left,
        .bottom-left,
        .bottom-right {
            display: none;
        }

        .center-top-right,
        .bottom-center {
            width: 100%;
        }

        .text-wrapper {
            margin-bottom: 10%;
        }
    }
`

export default styles