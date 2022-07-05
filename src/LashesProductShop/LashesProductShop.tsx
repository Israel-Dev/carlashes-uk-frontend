import { Gradient, ProductCard, Title } from 'shared';
import {
    LashesProductsContainer,
    ProductsContainer,
    TicleContainer,
} from './LashesProductShop.styled';

const LashesProductsShop = () => {
    const Products = [<ProductCard />, <ProductCard />, <ProductCard />];

    return (
        <LashesProductsContainer>
            <Gradient />
            <TicleContainer className="title-container">
                <Title text="Lashes Products" />
            </TicleContainer>
            <ProductsContainer className="products-container">
                {Products}
            </ProductsContainer>
        </LashesProductsContainer>
    );
};

export default LashesProductsShop;
