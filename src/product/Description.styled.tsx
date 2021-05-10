import styled from 'styled-components'
import colors from '../utils/colors'

const styles = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .descrption-content {
        margin-top: -10%;
        width: 30vw;
    }

    .product-title {
        margin: 0;
        padding: 0;
    }

    .description-paragraph {
        margin: 5% 0 0 0;
        padding: 0;
    }

    .product-description {
        font-weight: 200;
        text-align: left;
        padding: 0;
        margin: 0;
    }

    .description-section {
        margin: 7% 0;
    }

    .description-action-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .purchase-wrapper {
        text-align: right;
        max-width: 50%;
    }

    .description-footer {
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .icons-wrapper {
        display: flex;
        justify-content: space-evenly;
    }

    .share-icon {
        margin-right: 10px;
    }

    .share-icon:hover {
        cursor: pointer;
        transition: all ease-in-out .1s;
    }

    .clipboard {
        cursor: copy !important;
    }

    .clipboard:active {
        transition: all ease-in-out .1s;
        color: ${colors['alpha-pink']};
    }

`

export default styles