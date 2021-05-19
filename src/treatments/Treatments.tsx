import Styles from './Treatments.styled'
import Cover from '../shared/Cover'
import Image01 from '../assets/Cover_01.webp'

const Treatments = () => {
    return (
        <Styles className="treatments-wrapper">
            <Cover
                title="Our Treatments"
                images={
                    [
                        { src: Image01, alt: "Our Treatments" }
                    ]
                }
            />
            <div className="treatments-padding">
                <section className="treatments-text-area">
                    <p className="treatments-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto.
                    </p>
                </section>
            </div>
        </Styles>
    )
}

export default Treatments