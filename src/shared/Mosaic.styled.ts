import styled from 'styled-components'

const styles = styled.section`
    max-width: 1366px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .mosaic-image-wrapper {
        cursor: pointer;
        position: relative;
        margin-bottom: 25px;
        height: 150px;
        width: 85%;
        transition: all .4s ease-in-out;
        overflow: hidden;
    }

    .mosaic-image {
        position: relative;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all .4s ease-in-out;
    }

    .mosaic-gradient-image {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 5;
        background: rgb(153 120 89);
        background: linear-gradient(180deg,rgb(153 120 89 / 90%) 0%,rgb(0 0 0 / 20%) 50%,rgb(73 137 153 / 70%) 100%);
        transition: all .4s ease-in-out;
    }

    .mosaic-overlay-text {
        position: absolute;
        height: 100%;
        width: 100%;
        content: "text";
        font-size: 2em;
        color: white;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: all ease-in-out .4s;
    }

    .mosaic-image-wrapper:hover .mosaic-overlay-text {
        opacity: 1;
        transition: all ease-in-out .4s;
    }

    .mosaic-image-wrapper:hover .mosaic-gradient-image {
        opacity: 1;
        transition: all .4s ease-in-out;
    }

    .mosaic-image-wrapper:hover .mosaic-image {
        transform: scale(1.05);
    }
`

export default styles