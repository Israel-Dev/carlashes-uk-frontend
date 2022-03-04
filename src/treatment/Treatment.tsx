import Styles from './Treatment.styled';
import { Calendar, Gradient, Title } from '../shared';
import PhotoCarousel from './Photo-Carousel';
import PhotoWall from './Photo-Wall';

const Treatment = () => {
    return (
        <Styles className="treatment-page-wrapper">
            <Gradient />
            <Title text={'Treatment'} />
            <PhotoCarousel />
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
