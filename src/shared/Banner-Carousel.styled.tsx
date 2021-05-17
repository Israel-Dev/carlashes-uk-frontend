import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.section`
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
    
    .banner-text-wrapper {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 10;
        color: white;
    }

    .banner-text-paragraph {
        color: ${colors['dark-gray']};
        font-weight: 200;
        text-align: center;
        width: 60%;
        margin: 0;
    }

    .author {
        margin: 40px 0 0 0; 
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
        background-color: rgba(255, 255, 255, 0.6);
        z-index: 5;
    }

    .visible {
        /* opacity: 1; */
        left: 0;
        transition: all ease-in-out .4s;
    }

    .hidden {
        position: absolute;
        left: 100%;
        /* opacity: 0; */
        transition: all ease-in-out .4s;
    }

    .banner-carousel-content {
        position: relative;
    }

    .left-arrow {
        position: absolute;
        left: 0;
    }

    @media(max-width: 875px) {
        height: 450px;
    }
`

export default styles