import { gradientHeight } from 'shared/Gradient.styled';
import styled from 'styled-components';

export const LashesProductsContainer = styled.div`
    padding: ${gradientHeight / 2.6}px 0 ${gradientHeight / 3}px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TicleContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductsContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin: 25px 0;
    gap: 45px;
`;
