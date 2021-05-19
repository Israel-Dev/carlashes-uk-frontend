import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImageFile from '../assets/logo.png'
import Button from './Button'
import Styles from './Menu.styled'

interface IProps {
    options: { name: string, url: string }[]
}

const Menu = (props: IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
    const [logo, setLogo] = useState(
        { src: logoImageFile, alt: "Carlashes - UK" }
    )

    const { options } = props

    const optionsElem = options.map((option, i) => {
        return (
            <li
                key={`${i}-option`}
                className="menu-option"
                onClick={() => {
                    setIsOpen(false)
                    history.push(`/${option.url}`)
                }}
            >
                {option.name}
            </li>
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
                            height="auto"
                            width="auto"
                        />
                    </Link>
                </div>
                <div className="menu-options-wrapper">
                    <ul className="menu-list">
                        {optionsElem}
                        <Button label="Contact Me" callback={() => history.push("/contact-me")} />
                    </ul>
                </div>
                <div className="menu-icon-wrapper-mobile">
                    <FontAwesomeIcon
                        className="menu-icon"
                        icon={faBars}
                        size="2x"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
            <div className={`menu-options-wrapper-mobile ${isOpen ? "open" : ""}`}>
                <ul className="menu-list">
                    {optionsElem}
                    <li
                        className="menu-option"
                        onClick={() => {
                            setIsOpen(false)
                            history.push(`/contact-me`)
                        }}
                    >
                        Contact Me
                    </li>
                </ul>
            </div>
        </Styles>
    )
}

export default Menu