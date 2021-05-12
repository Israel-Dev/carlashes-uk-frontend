import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.article`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    .photo-card-img {
        height: 400px;
        width: 400px;
        object-fit: cover;
        border-radius: 50%;
        z-index: 10;
    }

    .photo-card-text-div {
        margin-left: -5%;
        width: 40%;
        background:${colors['purple-gradient']};
        border-radius: 10px;
        padding: 70px 2% 70px 6%;
        color: white;
    }
`

export default styles