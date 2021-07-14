import styled from 'styled-components';

const styles = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: auto;
    /* min-height: 5130px; */

    .testimonials-section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .collection-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 1366px;
    }

    .calendar-section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-bottom: 100px;
    }

    .calendar-paragraph {
        /* margin: 0; */
        font-weight: 200;
        margin: 0;
        padding: 0;
        text-align: center;
    }
`;

export default styles;
