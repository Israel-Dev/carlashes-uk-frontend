import Styles from './Treatment.styled';
import { Gradient, Title } from '../shared';
import PhotoCarousel from './Photo-Carousel';

const Treatment = () => {
    return (
        <Styles className="treatment-page-wrapper">
            <Gradient />
            <Title text={'Treatment'} />
            <PhotoCarousel />
        </Styles>
    );
};

export default Treatment;
