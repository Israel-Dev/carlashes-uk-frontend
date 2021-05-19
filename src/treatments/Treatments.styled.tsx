import styled from 'styled-components'

const styles = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .treatments-padding {
        width: 100%;
        max-width: 1366px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .treatments-text-area {
        margin: 60px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .treatments-paragraph {
        text-align: center;
        font-weight: 200;
    }
`

export default styles