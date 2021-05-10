import Styles from './Product.styled'
import Gradient from '../shared/Gradient'
import Gallery from './Gallery'
import Description from './Description'
import BannerCarousel from '../shared/Banner-Carousel'
import Mosaic from '../shared/Mosaic'
import Title from '../shared/Title'

import rec_image01 from '../assets/Gallery_01.jpg'
import rec_image02 from '../assets/Gallery_02.jpg'
import rec_image03 from '../assets/Gallery_03.jpg'
import rec_image04 from '../assets/Gallery_04.jpg'
import rec_image05 from '../assets/Gallery_05.jpg'
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'

const { REACT_APP_SERVER_ADDRESS } = process.env

interface IProductData {
    title: string
    description: string
    productRef: string,
    images: { src: string, alt: string }[]

}

const Product = () => {
    const [price, setPrice] = useState(35.99)
    const location = useLocation()
    const history = useHistory()
    const productRef = new URLSearchParams(location.search).get('product_ref')

    const [productData, setProductData] = useState<IProductData>(
        {
            title: "",
            description: "",
            productRef: productRef as string,
            images: []
        }
    )

    const getProductData = async () => {
        try {
            const response = await axios.get(`${REACT_APP_SERVER_ADDRESS}/resource/getProductData?productRef=${productRef}`)

            const status = response.status

            switch (status) {
                case 200:
                default:
                    setPrice(response.data.price)
                    setProductData(
                        {
                            title: response.data.title,
                            description: response.data.description,
                            productRef: response.data.productRef,
                            images: response.data.images
                        }
                    )
            }
        } catch (e) {
            console.error(e)

            if (e.response) {
                const status = e.response.status

                switch (status) {
                    case 404:
                        history.push("/404")
                        break;
                    case 400:
                    default:
                    // Erro handling
                }
            }
        }
    }

    const [recomendations, setRecomendations] = useState<{ src: string, alt: string, url: string }[]>([])

    const getRecomendations = async () => {
        try {
            const response = await axios.get(`${REACT_APP_SERVER_ADDRESS}/resource/getRecomendations?productRef=${productRef}`)

            const status = response.status

            switch (status) {
                case 200:
                default:
                    setRecomendations(response.data)
            }
        } catch (e) {
            console.error(e)

            if (e.response) {
                const status = e.response.status

                switch (status) {
                    case 404:
                        history.push("/404")
                        break
                    case 400:
                    default:
                    //error handling
                }
            }
        }
    }

    useEffect(() => {
        getProductData()
        getRecomendations()
    }, [productRef])

    return (
        <Styles className="product-page-wrapper">
            <Gradient />
            <div className="product-page-padding">
                <section className="product-section">
                    <Gallery
                        images={productData?.images}
                        hasDots={productData?.images.length ? true : false}
                    />
                    <Description
                        title={productData?.title}
                        description={productData?.description}
                        price={price}
                        priceCallback={setPrice}
                        productRef={productData?.productRef as string}
                        showStepper={true}
                    />
                </section>
            </div>
            <div className="page-break">
                <BannerCarousel />
                <div className="product-recomendations">
                    <Title
                        text="Other Products"
                    />
                    <Mosaic
                        items={recomendations}
                    />
                </div>
            </div>
        </Styles>
    )
}

export default Product