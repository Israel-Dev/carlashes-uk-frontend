import Cover from '../shared/Cover'
import Styles from './Products.styled'
import Image01 from '../assets/products-page-cover.jpg'
import Title from '../shared/Title'
import Mosaic from '../shared/Mosaic'
import { useEffect, useState } from 'react'
import axios from 'axios'

const { REACT_APP_SERVER_ADDRESS } = process.env

const ProductsPage = () => {
    const [mosaicOptions, setMosaicOptions] = useState([])

    const getMosaicOptions = async () => {
        try {
            const response = await axios.get(`${REACT_APP_SERVER_ADDRESS}/resource/getMosaicOptions`)

            const status = response.status

            switch (status) {
                case 200:
                default:
                    setMosaicOptions(response.data)
            }
        } catch (e) {
            console.error(e)

            if (e.response) {
                const status = e.response.status

                switch (status) {
                    case 400:
                    default:
                        console.log("Unable fo fetch Collection options")
                }
            }
        }
    }

    useEffect(() => {
        getMosaicOptions()
    }, [])

    return(
        <Styles className="products-page-wrapper">
            <Cover
                title="Our Products"
                images={
                    [
                        { src: Image01, alt: "Our Products" }
                    ]
                }
            />
            <div className="products-page-padding">
                <section className="products-page-text-area">
                    <p className="products-page-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto.
                    </p>
                </section>
            </div>
            <section className="collection-section">
                <Title
                    text="Our Collection"
                />
                <Mosaic
                    items={mosaicOptions}
                />
            </section>
        </Styles>
    )
}

export default ProductsPage