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
        { img: string; alt: string; ref: string }[]
    >([]);
    const treatmentRef = ref && ref.split('=')[1];

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
                        ref: subType.ref,
                    }))
                );
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getTreatmentData();
    }, []);

    const [treatmentSubType, setTreatmentSubType] = useState<number>(0);
    const [treatmentSubTypeImages, setTreatmentSubTypeImages] = useState<
        string[]
    >([]);

    const getSubTypeImages = async (subTypeRef: string) => {
        try {
            if (treatmentRef) {
                const subTypeImages: string[] = (
                    await axios.get(
                        `${REACT_APP_SERVER_ADDRESS}/resource/getTreatmentSubTypeImages?treatmentRef=${treatmentRef}&subTypeRef=${subTypeRef}`
                    )
                )?.data;

                setTreatmentSubTypeImages(subTypeImages);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (treatmentCarouselImages[treatmentSubType]) {
            getSubTypeImages(treatmentCarouselImages[treatmentSubType].ref);
        }
    }, [treatmentSubType]);

    console.log('treatmentCarouselImages', treatmentCarouselImages);
    console.log('treatmentSubType', treatmentSubType);

    return (
        <Styles className="treatment-page-wrapper">
            <Gradient />
            <Title text={treatmentTitle} />
            <br />
            <br />
            <br />
            <br />

            <section className="treatments-calendar">
                {/* <Title text="Agenda" /> */}
                <Calendar
                    activeTreatment={treatmentRef}
                    treatmentSubTypeRef={
                        treatmentCarouselImages.length
                            ? treatmentCarouselImages[treatmentSubType].ref
                            : ''
                    }
                />
                <p className="calendar-paragraph">
                    Schedule an Appointment with us on the available time slots!
                </p>
            </section>
            <PhotoCarousel
                items={treatmentCarouselImages}
                setTreatmentSubType={setTreatmentSubType}
            />
            <PhotoWall
                items={treatmentSubTypeImages.map((image) => ({
                    img: image,
                    alt: treatmentCarouselImages[treatmentSubType].alt,
                }))}
            />
        </Styles>
    );
};

export default Treatment;
