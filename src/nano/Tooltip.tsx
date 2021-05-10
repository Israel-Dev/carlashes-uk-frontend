import Styles from './Tooltip.styled'

const Tooltip = (props: any) => {
    const {children} = props

    return (
        <Styles className="tooltip-wrapper">
            <span data-tooltip="Tooltip help here!" data-flow="bottom">{children}</span>
        </Styles>
    )
}

export default Tooltip