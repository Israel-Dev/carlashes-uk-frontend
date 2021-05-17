import styled from 'styled-components'

const styles = styled.button`
    padding: 10px 30px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    outline: none;
    border: none;
    color: white;
    background: rgb(73 137 153);
    background: linear-gradient(45deg,rgb(73 137 153) 50%,rgb(156 214 230) 100%);
    transition: all ease-in-out .2s;

    :hover {
        cursor: pointer;
        transform: scale(1.075);
        transition: all ease-in-out .2s;
    }

    :active {
        color: rgb(69,47,128);
    }

    @media(max-width: 875px) {
        width: 100%;
    }
`

export default styles
