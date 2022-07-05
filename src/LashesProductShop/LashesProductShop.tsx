import axios from 'axios';
import { useEffect, useState } from 'react';
import { Gradient, ProductCard, Title } from 'shared';
import {
    LashesProductsContainer,
    ProductsContainer,
    TicleContainer,
} from './LashesProductShop.styled';

const { REACT_APP_SERVER_ADDRESS } = process.env;

interface ILashProduct {
    description: string;
    images: string[];
    mainImage: string;
    name: string;
    price: string;
    productRef: string;
    _id: string;
}

const LashesProductsShop = () => {
    const [lashProducts, setLashProducts] = useState<ILashProduct[]>([]);

    const fetchLashProducts = async () => {
        try {
            const response = await axios.get(
                `${REACT_APP_SERVER_ADDRESS}/resource/lashesProducts`
            );

            setLashProducts(response.data);
        } catch (e) {
            console.error('Error in fetchLashProducts:', e);
        }
    };

    useEffect(() => {
        fetchLashProducts();
    }, []);

    console.log('lashProducts', lashProducts);
    const lashProductsElem = lashProducts.map((lashProduct) => (
        <ProductCard
            key={`${lashProduct.productRef}`}
            mainImage={lashProduct.mainImage}
            name={lashProduct.name}
            price={lashProduct.price}
            productRef={lashProduct.productRef}
        />
    ));

    return (
        <LashesProductsContainer>
            <Gradient />
            <TicleContainer className="title-container">
                <Title text="Lashes Products" />
            </TicleContainer>
            <ProductsContainer className="products-container">
                {lashProductsElem}
            </ProductsContainer>
        </LashesProductsContainer>
    );
};

export default LashesProductsShop;
