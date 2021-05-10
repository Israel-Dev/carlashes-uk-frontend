import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.section`
    position: relative;

    .gallery-image-article {
        position: relative;
        width: 30vw;
    }

    .gallery-image {
        width: 100%;
        height: 600px;
        object-fit: cover;
        border-radius: 20px;
    }

    .visible {
        opacity: 1;
        transition: all ease-in-out .4s;
    }

    .hidden {
        opacity: 0;
        transition: all ease-in-out .4s;
        position: absolute;
        top: 0;
        left: 0;
    }

    .dots-footer {
        position: relative;
        padding: 20px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default styles