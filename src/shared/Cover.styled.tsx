import styled from 'styled-components'

const styles = styled.section`
    position: relative;
    width: 100%;
    max-height: 800px;
    overflow: hidden;

    .image-gradient {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgb(91,0,38);
        background: linear-gradient(140deg,rgb(153 120 89 / 45%) 50%,rgba(178,109,180,0.04) 80%,rgba(0,0,0,0) 100%);
    }

    .cover-title {
        text-align: center;
        z-index: 5;
        color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

export default styles