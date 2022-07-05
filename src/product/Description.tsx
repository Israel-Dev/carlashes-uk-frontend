import Styles from './Description.styled';
import Price from '../shared/Price';
import Stepper from './Stepper';
import Button from '../shared/Button';
import Label from '../nano/Label';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { colors } from '../utils/stylesheet';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Radio from '../nano/Radio';
import Tooltip from '../nano/Tooltip';
import { useEffect } from 'react';

interface IProps {
    title: string;
    description: string;
    price: number;
    productRef: string;
    showStepper?: boolean;
    priceCallback?: Function;
}

const { REACT_APP_STRIPE_PUBLIC_KEY, REACT_APP_SERVER_ADDRESS } = process.env;

const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY as string);

const Description = (props: IProps) => {
    const [quantity, setQuantity] = useState(1);
    const [shippingMethod, setShippingMethod] = useState(1);

    const { title, description, price, productRef, showStepper } = props;

    const finalPrice = `£${(price * quantity).toFixed(2)}`;

    const purchase = async () => {
        try {
            const stripe = await stripePromise;

            const response = (
                await axios.post(
                    `${REACT_APP_SERVER_ADDRESS}/purchase/getSession`,
                    {
                        products: [{ ref: productRef, quantity }],
                        shippingMethod,
                    }
                )
            )?.data;

            await stripe?.redirectToCheckout({
                sessionId: response.sessionID,
            });
        } catch (e) {
            console.error(e);
        }
    };

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setQuantity(1);
    }, [productRef]);

    return (
        <Styles className="description-wrapper">
            <div className="descrption-content">
                <header className="descrption-header">
                    <h2 className="product-title">{title}</h2>
                </header>
                <section className="description-paragraph">
                    <p className="product-description">{description}</p>
                </section>
                <section className="description-section">
                    <Price value={finalPrice} />
                </section>
                <section className="description-action-section">
                    {showStepper && (
                        <Stepper
                            label="Quantity:"
                            quantity={quantity}
                            callback={setQuantity}
                        />
                    )}
                    <div className="purchase-wrapper">
                        <section className="shipping-wrapper">
                            <Label text="Shipping method:" />
                            <Radio
                                handleChange={setShippingMethod}
                                selected={shippingMethod}
                                name="shipping_method"
                                options={[
                                    {
                                        label: 'Standard UK Shipping - Free',
                                        value: 1,
                                        description: '2-4 Working Days',
                                    },
                                    {
                                        label: 'DPD Next Working Day Tracked - £3.00',
                                        value: 2,
                                        description:
                                            'Order berfore 3pm Mon-Fri for Next Working Day Delivery // Orders after 3pm Fri-Mon are delivered Tue.',
                                    },
                                ]}
                            />
                        </section>
                    </div>
                </section>
                <footer className="description-footer">
                    <div className="share-wrapper">
                        <Label text="Share:" />
                        <div className="icons-wrapper">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                                    window.location.href
                                )}`}
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    className="share-icon"
                                    icon={faFacebook}
                                    color={colors.purple}
                                    size="2x"
                                />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURI(
                                    window.location.href
                                )}`}
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    className="share-icon"
                                    icon={faTwitter}
                                    color={colors.purple}
                                    size="2x"
                                />
                            </a>
                            <FontAwesomeIcon
                                className="share-icon clipboard"
                                icon={faShareSquare}
                                color={colors.purple}
                                size="2x"
                                onClick={(e) => {
                                    navigator.clipboard.writeText(
                                        window.location.href
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <Button
                        isFullWidth={true}
                        label="Purchase"
                        callback={purchase}
                    />
                </footer>
            </div>
        </Styles>
    );
};

export default Description;
