import Styles from './Treatments.styled';
import Cover from '../shared/Cover';
import Headline from '../shared/Headline';
import Image01 from '../assets/Cover_01.webp';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from '../shared/Calendar';
import Title from '../shared/Title';

const { REACT_APP_SERVER_ADDRESS } = process.env;

interface ITreatments {
    name: string;
    teaser: string;
    price: string;
    ref: string;
    description: string;
    images: string[];
}

const Treatments = () => {
    const [treatments, setTreatments] = useState<ITreatments[]>([]);

    const getTreatments = async () => {
        try {
            const fetchedTreatments: ITreatments[] = (
                await axios.get(
                    `${REACT_APP_SERVER_ADDRESS}/resource/getTreatments`
                )
            )?.data;
            setTreatments(fetchedTreatments);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getTreatments();
    }, []);

    const headlineElems = treatments.map((el, i) => {
        return (
            <Headline
                key={`treatment-${i}`}
                title={el.name}
                treatmentRef={el.ref}
                teaser={el.teaser}
                description={el.description}
                images={el.images}
                price={el.price}
                reverse={i % 2 === 0 ? false : true}
            />
        );
    });

    return (
        <Styles className="treatments-wrapper">
            <Cover
                title="Our Treatments"
                images={[{ src: Image01, alt: 'Our Treatments' }]}
            />
            <div className="treatments-padding">
                <section className="treatments-text-area">
                    <p className="treatments-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto.
                    </p>
                </section>
            </div>
            <section className="treatments-headlines">{headlineElems}</section>
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

export default Treatments;
