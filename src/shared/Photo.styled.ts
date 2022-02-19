import styled from 'styled-components';
import { BorderRadius } from 'utils/stylesheet';

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${BorderRadius.medium};
`;

export default Image;
