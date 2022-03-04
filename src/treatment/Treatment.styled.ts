import styled from 'styled-components';

const styles = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 18vh;

    .treatments-calendar {
        width: 90%;
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .calendar-paragraph {
        text-align: center;
        font-weight: 200;
    }
`;

export default styles;
