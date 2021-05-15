import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.section`
    max-height: 700px;
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .carousel-title {
        width: 100%;
        max-width: 1366px;
        padding-left: 10%;
        position: absolute;
        color: white;
        z-index: 15;
    }

    .carousel-maintitle {
        color: white;
        margin: .3em 0;
    }

    .carousel-subtitle {
        margin: 0;
        padding: 0;
        font-size: 18px;
    }

    .carousel-sticker-wrapper {
        position: absolute;
        width: 100%;
        max-width: 1366px;
        z-index: 15;
        margin-right: 10%;
        bottom: 10%;
    }

    .carousel-sticker-position {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    img {
        width: 100vw;
        max-height: 700px;
        object-fit: cover;
    }

    .previous-image {
        position: absolute;
        opacity: 0;
        transition: all ease-in-out 1s;
    }

    .image-gradient {
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgb(91,0,38);
        background: linear-gradient(140deg,rgb(153 120 89 / 30%) 50%,rgba(178,109,180,0.04) 80%,rgba(0,0,0,0) 100%);
        position: absolute;
    }

    .hidden-image {
        position: absolute;
        opacity: 1;
        z-index: -10;
        transition: all ease-in-out 1s;
    }

    .current-image {
        position: relative;
        opacity: 1;
        transition: all ease-in-out 1s;
    }

    .carousel-dots-wrapper {
        position: absolute;
        width: 100%;
        max-width: 1366px;
        z-index: 20;
        bottom: 15%;
        padding-left: 10%;
    }

    .carousel-down-arrow-wrapper {
        position: absolute;
        bottom: 0;
        z-index: 15;
        transform: translateY(50%);
    }

    .down-arrow-icon {
        position: relative;
        transition: all ease-in-out .2s;
    }

    .down-arrow-icon:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: all ease-in-out .2s;
    }

    .down-arrow-background {
        height: 68%;
        width: 68%;
        position: absolute;
        left: 0;
        z-index: -5;
        background-color: white;
        transform: translate(25%, 25%);
    }

    @media(max-width: 875px) {
        min-height: 500px;

        .carousel-maintitle {
            font-size: 2.7em;
        }

        .carousel-subtitle {
            font-size: .9em;
            max-width: 50%;
        }

        img {
            width: auto;
            height: 100%;
        }
    }

    @media(max-width: 545px) { 
        .carousel-dots-wrapper {
            padding-left: 0;
            display: flex;
            justify-content: center;
        }

        .carousel-sticker-position {
            display: none;
        }
    }
`

export default styles