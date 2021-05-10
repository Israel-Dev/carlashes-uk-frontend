import styled from 'styled-components'

const styles = styled.section`
    position: relative;
    width: 100%;
    height: 350px;    

    .banner-text-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        z-index: 10;
        color: white;
    }

    .banner-text-paragraph {
        text-align: center;
        width: 75%;
        margin: 0;
    }

    .banner-image {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    :before {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.55);
        z-index: 5;
    }
`

export default styles