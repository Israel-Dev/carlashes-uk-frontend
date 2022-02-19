import styled from 'styled-components';
import { colors } from '../utils/stylesheet';

interface IStyleProps {
    isWhite: boolean | undefined;
}

const styles = styled.header`
    position: relative;
    width: 100%;
    max-width: 1366px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 0;

    .title-text {
        color: ${(props: IStyleProps) =>
            props.isWhite ? 'white' : colors.purple};
        margin: 0;
    }

    .title-subtext {
        font-weight: 300;
        margin: 10px 0;
    }

    .title-image {
        height: 100px;
    }

    ::before,
    ::after {
        position: absolute;
        width: 25%;
        max-width: 415px;
        height: 1px;
        content: '';
        background-color: ${(props: IStyleProps) =>
            props.isWhite ? 'white' : colors['dark-gray']};
        transform: translateX(-100%);
        margin-right: 1.5%;
    }

    ::after {
        transform: translateX(100%);
        margin-right: -1.5%;
    }

    @media (max-width: 875px) {
        max-width: 85%;

        .title-text {
            font-size: 1.5em;
        }

        ::before,
        ::after {
            width: 15%;
            margin-right: 0;
        }

        ::before {
            left: 0;
            transform: translateX(25%);
        }

        ::after {
            right: 0;
            transform: translateX(-25%);
        }

        /*
        ::before {
            left: 0;
            width: 10%;
        }

        :after {
            width: 10%;
            right: 0;
        } */
    }
`;

export default styles;
