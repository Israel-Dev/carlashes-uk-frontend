import styled from 'styled-components'

const styles = styled.button`
    padding: 10px 30px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    outline: none;
    border: none;
    color: white;
    background: rgb(69,47,128);
    background: linear-gradient(45deg, rgba(69,47,128,1) 0%, rgba(165,54,154,1) 100%);
    transition: all ease-in-out .2s;

    :hover {
        cursor: pointer;
        transform: scale(1.075);
        transition: all ease-in-out .2s;
    }

    :active {
        color: rgb(69,47,128);
    }
`

export default styles
