import styled from 'styled-components';
import colors from './utils/colors';

const styles = styled.main`
    font-size: 18px;
    width: 100%;
    overflow: hidden;

    a {
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }

    h1,
    h2,
    h3,
    h4 {
        color: ${colors.purple};
    }
`;

export default styles;
