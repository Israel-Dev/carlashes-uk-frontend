import styled from 'styled-components';
import { colors } from 'utils/stylesheet';

export const gradientHeight = 535;

const linearGradient = `linear-gradient(180deg,${colors.darkPrimary} 0%,rgba(255,255,255,0.15) 100%)`;

const styles = styled.div`
    position: absolute;
    height: ${gradientHeight}px;
    left: 0;
    right: 0;
    top: 0;
    background: ${linearGradient};
    z-index: -10;
`;

export default styles;
