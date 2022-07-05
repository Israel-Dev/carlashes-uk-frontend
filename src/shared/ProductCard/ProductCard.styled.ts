import styled from 'styled-components';
import { colors } from 'utils/stylesheet';

export const ProductCardContainer = styled.article`
    background-color: white;
    padding: 10px;
    width: 25vw;
    height: 385px;
    max-width: 250px;
    min-width: 185px;
    transition: all ease-in-out 0.3s;
    box-shadow: 5px 10px 10px #8080806e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all ease-in-out 0.3s;
    }
`;

export const StyledProductCardTitle = styled.h5`
    color: ${colors['dark-gray']};
    text-align: center;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 200px;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;
