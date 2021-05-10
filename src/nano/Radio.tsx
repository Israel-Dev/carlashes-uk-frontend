import { useEffect } from 'react'
import { useState } from 'react'
import Styles from './Radio.styled'

interface IProps {
    selected: number
    handleChange: Function
    name: string
    options: { label: string, value: string | number, description?: string }[]
}

const Radio = (props: IProps) => {

    const { options, name, selected, handleChange } = props

    const optionsElem = options.map((option, i) => (
        <article className="option-article" key={`option-${name}-${i}`}>
            <input 
                className="option-input" 
                type="radio"
                name={name}
                value={`${option.value}`}
                checked={option.value === selected}
                onChange={() => handleChange(option.value)}
                />
            <label className="option-label">{option.label}</label>
            {
                option.description &&
                <p className="option-description">{option.description}</p>
            }
        </article>
    ))

    return (
        <Styles className="radio-wrapper">
            {optionsElem}
        </Styles>
    )
}

export default Radio