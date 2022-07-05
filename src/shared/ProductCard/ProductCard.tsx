import { useHistory } from 'react-router-dom';
import { Price } from 'shared';
import {
    ImageContainer,
    ProductCardContainer,
    StyledImage,
    StyledProductCardTitle,
} from './ProductCard.styled';

interface Props {
    mainImage: string;
    name: string;
    price: string;
    productRef: string;
}

const ProductCard = ({ mainImage, name, price, productRef }: Props) => {
    const history = useHistory();

    return (
        <ProductCardContainer
            onClick={() => history.push(`/product?product_ref=${productRef}`)}
        >
            <ImageContainer>
                <StyledImage src={mainImage} alt={name} />
            </ImageContainer>
            <StyledProductCardTitle>{name}</StyledProductCardTitle>
            <Price value={`£${price}`} />
        </ProductCardContainer>
    );
};

export default ProductCard;
