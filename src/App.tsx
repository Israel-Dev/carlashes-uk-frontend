import React, { useState, useEffect, Suspense } from 'react';
import Styles from './App.styled';
import Menu from './shared/Menu';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './shared/Footer';
import axios, { AxiosError } from 'axios';
import Loading from './loading/Loading';
import { ScrollToTop } from 'shared';

const { REACT_APP_SERVER_ADDRESS } = process.env;

const LazyHome = React.lazy(() => import('./home/Home'));
const LazyTreatments = React.lazy(() => import('./treatments/Treatments'));
const LazyTreatment = React.lazy(() => import('./treatment/Treatment'));
const LazyProductsPage = React.lazy(() => import('./products/Products'));
const LazyConfirmation = React.lazy(
    () => import('./confirmation/Confirmation')
);
const LazyProduct = React.lazy(() => import('./product/Product'));
const LazyContact = React.lazy(() => import('./contact/Contact'));
const LazyAbout = React.lazy(() => import('./about/About'));
const LazyLashesProductsShop = React.lazy(() => import('./LashesProductShop'));
const Lazy404 = React.lazy(() => import('./_404/404'));

const App = () => {
    const [menuOptions, setMenuOptions] = useState<
        { name: string; url: string }[]
    >([
        { name: 'Home', url: '' },
        { name: 'Our Treatments', url: 'our-treatments' },
        { name: 'Magnetic Eyelashes', url: 'magnetic-eyelashes' },
        { name: 'Lashes Products', url: 'shop-lashes-products' },
    ]);

    return (
        <BrowserRouter>
            <Styles className="App">
                <Menu options={menuOptions} />
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route
                            path={['/', '/home']}
                            component={LazyHome}
                            exact
                        />
                        <Route
                            path="/our-treatments"
                            component={LazyTreatments}
                        />
                        <Route
                            path="/magnetic-eyelashes"
                            component={LazyProductsPage}
                        />
                        <Route
                            path={[
                                '/appointment-confirmed',
                                '/booking-payment',
                                '/purchase-confirmed',
                            ]}
                            component={LazyConfirmation}
                            exact
                        />
                        <Route path={'/product'} component={LazyProduct} />
                        <Route
                            path={['/contact-me', '/contact']}
                            component={LazyContact}
                        />
                        <Route path={['/about-us']} component={LazyAbout} />
                        <Route
                            path={'/treatment/:ref'}
                            component={LazyTreatment}
                        />
                        <Route
                            path={`/shop-lashes-products`}
                            component={LazyLashesProductsShop}
                        />
                        <Route component={Lazy404} />
                    </Switch>
                </Suspense>
                <Footer />
                <div className="scroll-up-wrapper">
                    <ScrollToTop />
                </div>
            </Styles>
        </BrowserRouter>
    );
};

export default App;
