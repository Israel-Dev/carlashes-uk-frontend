import Styles from './Treatment.styled';
import { Calendar, Gradient, Title } from '../shared';
import PhotoCarousel from './Photo-Carousel';
import PhotoWall from './Photo-Wall';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const { REACT_APP_SERVER_ADDRESS } = process.env;

interface ITreatmentData {
    description: string;
    images: string[];
    name: string;
    price: string;
    ref: string;
    schedulePrice: string;
    teaser: string;
    subTypes: {
        images: string[];
        mainImage: string;
        name: string;
        price: string;
        ref: string;
    }[];
}

interface ParamTypes {
    ref: string;
}

const Treatment = () => {
    const { ref } = useParams<ParamTypes>();
    const [treatmentTitle, setTreatmentTitle] = useState('');
    const [treatmentCarouselImages, setTreatmentCarouselImages] = useState<
        { img: string; alt: string }[]
    >([]);

    const getTreatmentData = async () => {
        try {
            const treatmentRef = ref && ref.split('=')[1];

            if (treatmentRef) {
                const treatmentData: ITreatmentData = (
                    await axios.get(
                        `${REACT_APP_SERVER_ADDRESS}/resource/getTreatmentData?treatmentRef=${treatmentRef}`
                    )
                )?.data;
                setTreatmentTitle(treatmentData.name);

                setTreatmentCarouselImages(
                    treatmentData.subTypes.map((subType) => ({
                        img: subType.mainImage,
                        alt: subType.name,
                    }))
                );
                console.log('treatmentData', treatmentData);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getTreatmentData();
    }, []);

    return (
        <Styles className="treatment-page-wrapper">
            <Gradient />
            <Title text={treatmentTitle} />
            <PhotoCarousel items={treatmentCarouselImages} />
            <PhotoWall />
            <section className="treatments-calendar">
                <Title text="Agenda" />
                <Calendar />
                <p className="calendar-paragraph">
                    Schedule an Appointment with us on the available time slots!
                </p>
            </section>
        </Styles>
    );
};

export default Treatment;
