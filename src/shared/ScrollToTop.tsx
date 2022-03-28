import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { colors } from 'utils/stylesheet';
import Styles from './ScrollToTop.styled';

const ScrollToTop = () => {
    const callback = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Styles className="scroll-to-top-wrapper">
            <FontAwesomeIcon
                icon={faChevronCircleUp}
                onClick={callback}
                color={colors.purple}
                size={'2x'}
            />
        </Styles>
    );
};

export default ScrollToTop;
