import styled from 'styled-components'

export const gradientHeight = 535

const styles = styled.div`
    position: absolute;
    height: ${gradientHeight}px;
    left: 0;
    right: 0;
    top: 0;
    background: linear-gradient(180deg,#e6c09c 0%,rgba(255,255,255,0.15) 100%);
    z-index: -10;
`

export default styles