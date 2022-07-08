import Styles from './Mosaic-Content.styled';
import image01 from '../assets/Mosaic_01.webp';
import image02 from '../assets/Mosaic_02.webp';
import image03 from '../assets/Mosaic_03.webp';
import image04 from '../assets/Mosaic_04.webp';
import image05 from '../assets/Mosaic_05.webp';
import image06 from '../assets/Mosaic_06.webp';
import image07 from '../assets/Mosaic_07.webp';
import image08 from '../assets/Mosaic_08.webp';
import { useState } from 'react';
import Title from '../shared/Title';
import Button_2 from '../shared/Button-2';
import Button2 from '../shared/Button-2';
import { useHistory } from 'react-router-dom';

const MosaicContent = () => {
    const history = useHistory();
    const [images, setIamges] = useState([
        {
            src: 'https://drive.google.com/uc?export=view&id=1hNuvPk3mg1TtTZmIHnrIE4rY3yRRpzRG',
            alt: 'calrashes-UK',
        },
        { src: image02, alt: 'calrashes-UK' },
        { src: image03, alt: 'calrashes-UK' },
        { src: image04, alt: 'calrashes-UK' },
        { src: image05, alt: 'calrashes-UK' },
        { src: image06, alt: 'calrashes-UK' },
        { src: image07, alt: 'calrashes-UK' },
        { src: image08, alt: 'calrashes-UK' },
    ]);

    const goToAboutUs = () => {
        window.scrollTo(0, 0);
        history.push('/about-us');
    };

    return (
        <Styles className="mosaic-content-wrapper">
            <div className="mosaic-content-container">
                <aside className="left-side-wrapper">
                    <img src={image01} className="main-left image" />
                </aside>
                <div className="center-wrapper">
                    <div className="top-images-wrapper">
                        <img
                            // TBD: Ajustar a altura
                            src={
                                'https://drive.google.com/uc?export=view&id=1hNuvPk3mg1TtTZmIHnrIE4rY3yRRpzRG'
                            }
                            className="center-top-left image"
                        />
                        <img
                            src={
                                'https://drive.google.com/uc?export=view&id=19i9y3AzAOKrKryX4_bJOy-TyOG-IOMve'
                            }
                            className="center-top-right image"
                        />
                    </div>
                    <div className="text-wrapper">
                        <Title text="About Us" />
                        <p className="text-paragraph">
                            Hello gorgeous my name is Carla! Through unrivalled
                            training and a deep passion for Lash techniques, our
                            devotion to this industry transcends our services
                            and is wholeheartedly dedicated to customer
                            experience and satisfaction gained from what we
                            provide. It's not just about what we do, it's about
                            how we make our clients feel. Our client-focused
                            philosophy ensures that unique lash sets are custom
                            designed for every one of our clients. We believe in
                            enhancing the natural beauty that is already there.
                        </p>
                        <Button2 label="Learn More" callback={goToAboutUs} />
                    </div>
                    <div className="bottom-images-wrapper">
                        <img
                            src={
                                'https://drive.google.com/uc?export=view&id=1b1KQPqEqwxOWPGnRl5mRkyklD7B3edtp'
                            }
                            className="bottom-left image"
                        />
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
    );
};

export default MosaicContent;
