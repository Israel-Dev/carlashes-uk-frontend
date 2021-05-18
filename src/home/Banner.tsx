import { useState } from 'react'
import Styles from './Banner.styled'
import coverImageFile from '../assets/Banner_01.webp'
import logoImageFile from '../assets/logo.png'
import Title from '../shared/Title'

const Banner = () => {
    const [coverImage, setCoverImage] = useState(
        {src: coverImageFile, alt: "Calashes UK"}
    )

    const [logoImage, setLogoImage] = useState(
        {src: logoImageFile, alt: "Calrashes UK"}
    )

    // Fetch Image

    return (
        <Styles className="banner-wrapper">
            <div className="banner-text-wrapper">
                <Title 
                    text={logoImage.src}
                    isImage={true}
                    isWhite={true}
                    alt={coverImage.alt}
                    />
                <p className="banner-text-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <img className="banner-image" src={coverImage.src} alt={coverImage.alt} />
        </Styles>
    )
}

export default Banner