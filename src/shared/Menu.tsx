import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImageFile from '../assets/logo.png'
import Button from './Button'
import Styles from './Menu.styled'

interface IProps {
    options: { name: string, url: string }[]
}

const Menu = (props: IProps) => {
    const history = useHistory()
    const [logo, setLogo] = useState(
        { src: logoImageFile, alt: "Carlashes - UK" }
    )

    const { options } = props

    const optionsElem = options.map((option, i) => {
        return (
            <Link to={`/${option.url}`} key={`${i}-option`}>
                <li className="menu-option">{option.name}</li>
            </Link>
        )
    })

    return (
        <Styles className="menu-wrapper">
            <div className="menu-padding">
                <div className="main-logo-wrapper">
                    <Link to="/">
                        <img
                            src={logo.src}
                            className="logo-img"
                        />
                    </Link>
                </div>
                <div className="menu-options-wrapper">
                    <ul className="menu-list">
                        {optionsElem}
                        <Button label="Contact Me" callback={() => history.push("/contact-me")} />
                    </ul>
                </div>
            </div>
        </Styles>
    )
}

export default Menu