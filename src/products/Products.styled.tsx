import styled from 'styled-components';
import { colors } from '../utils/stylesheet';

const styles = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .products-page-padding {
        width: 100%;
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .products-page-text-area {
        margin: 60px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .products-page-paragraph {
        text-align: center;
        font-weight: 200;
    }

    .collection-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background: ${colors['brown-to-white-gradient']};
    }

    @media (max-width: 875px) {
        .products-page-padding {
            width: 90%;
        }
    }
`;

export default styles;
