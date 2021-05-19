import { useState } from 'react'
import Styles from './Home.styled'
import Carousel from './Carousel'
import Title from '../shared/Title'
import Mosaic from '../shared/Mosaic'
import Banner from './Banner'
import CardCarousel from './Card-Carousel'
import MosaicContent from './Mosaic-Content'
import Calendar from '../shared/Calendar'
import image01 from '../assets/Gallery_01.webp'
import image02 from '../assets/Gallery_02.webp'
import image03 from '../assets/Gallery_03.webp'
import image04 from '../assets/Gallery_04.webp'
import image05 from '../assets/Gallery_05.webp'
import { useEffect } from 'react'
import axios from 'axios'

const { REACT_APP_SERVER_ADDRESS } = process.env

const Home = () => {
    const [mosaicOptions, setMosaicOptions] = useState<{ src: string, alt: string, url: string }[]>(
        [
            { src: image01, alt: "Chloe", url: "product?product_ref=8da89u131" },
            { src: image02, alt: "Anabelle", url: "product?product_ref=1297jnasd87" },
            { src: image03, alt: "Destiny", url: "product?product_ref=8s6hhb154a" },
            { src: image04, alt: "Amirah", url: "product?product_ref=ysda663zj6" },
            { src: image05, alt: "Aliyah", url: "product?product_ref=uhsd67531vt" }
        ]
    )

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

    return (
        <Styles className="home-wrapper">
            <Carousel
                hasSticker={true}
                hasDots={true}
            />
            <MosaicContent />
            <Banner />

            <section className="collection-section">
                <Title
                    text="Our Collection"
                />
                <Mosaic
                    items={mosaicOptions}
                />
            </section>
            <section className="testimonials-section">
                <Title
                    text="Testimonials"
                />
                <CardCarousel />
            </section>
            <section className="calendar-section">
                <Title
                    text="Agenda"
                />
                <Calendar />
                <p className="calendar-paragraph">
                    Schedule an Appointment with us on the available time slots!
                </p>
            </section>
        </Styles>
    )
}

export default Home