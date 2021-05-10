import Styles from './Mosaic-Content.styled'
import image01 from '../assets/Mosaic_01.jpg'
import image02 from '../assets/Mosaic_02.jpg'
import image03 from '../assets/Mosaic_03.jpg'
import image04 from '../assets/Mosaic_04.jpg'
import image05 from '../assets/Mosaic_05.jpg'
import image06 from '../assets/Mosaic_06.jpg'
import image07 from '../assets/Mosaic_07.jpg'
import image08 from '../assets/Mosaic_08.jpg'
import { useState } from 'react'
import Title from '../shared/Title'
import Button_2 from '../shared/Button-2'
import Button2 from '../shared/Button-2'
import { useHistory } from 'react-router-dom'


const MosaicContent = () => {
    const history = useHistory()
    const [images, setIamges] = useState([
        { src: image01, alt: "calrashes-UK" },
        { src: image02, alt: "calrashes-UK" },
        { src: image03, alt: "calrashes-UK" },
        { src: image04, alt: "calrashes-UK" },
        { src: image05, alt: "calrashes-UK" },
        { src: image06, alt: "calrashes-UK" },
        { src: image07, alt: "calrashes-UK" },
        { src: image08, alt: "calrashes-UK" },
    ])

    return (
        <Styles className="mosaic-content-wrapper">
            <div className="mosaic-content-container">
                <aside className="left-side-wrapper">
                    <img src={image01} className="main-left image" />
                </aside>
                <div className="center-wrapper">
                    <div className="top-images-wrapper">
                        <img src={image03} className="center-top-left image" />
                        <img src={image06} className="center-top-right image" />
                    </div>
                    <div className="text-wrapper">
                        <Title text="About Us" />
                        <p className="text-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Button2 
                            label="Learn More"
                            callback={() => history.push("/about-us")}
                            />
                    </div>
                    <div className="bottom-images-wrapper">
                        <img src={image08} className="bottom-left image" />
                        <img src={image05} className="bottom-center image" />
                        <img src={image04} className="bottom-right image" />
                    </div>
                </div>
                <aside className="right-side-wrapper">
                    <img src={image07} className="right-top-right image" />
                    <img src={image02} className="main-right image" />
                </aside>
            </div>
        </Styles>
    )
}

export default MosaicContent