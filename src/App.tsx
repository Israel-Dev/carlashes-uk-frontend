import React, { useState, useEffect, Suspense } from 'react';
import Styles from './App.styled'
import Menu from './shared/Menu'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Footer from './shared/Footer';
import axios from 'axios'
import Loading from './loading/Loading';

const { REACT_APP_SERVER_ADDRESS } = process.env

const LazyHome = React.lazy(() => import('./home/Home'))
const LazyTreatments = React.lazy(() => import('./treatments/Treatments'))
const LazyConfirmation = React.lazy(() => import('./confirmation/Confirmation'))
const LazyProduct = React.lazy(() => import('./product/Product'))
const LazyContact = React.lazy(() => import('./contact/Contact'))
const LazyAbout = React.lazy(() => import('./about/About'))
const Lazy404 = React.lazy(() => import('./_404/404'))

const App = () => {
  const [menuOptions, setMenuOptions] = useState<{ name: string, url: string }[]>(
    [
      {name: 'Home', url: ""},
      { name: 'Our Treatments', url: 'our-treatments' },
      { name: 'Magnetic Eyelashes', url: 'magnetic-eyelashes' },
      // { name: 'Destiny', url: 'product?product_ref=8s6hhb154a' },
      // { name: 'Amirah', url: 'product?product_ref=ysda663zj6' },
      // { name: 'Aliyah', url: 'product?product_ref=uhsd67531vt' }
    ]
  )

  const getMenuOptions = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_ADDRESS}/resource/getMenuOptions`)

      const status = response.status

      switch (status) {
        case 200:
          setMenuOptions(response.data)
          break;
      }
    } catch (e) {
      console.error(e)

      if (e.response) {
        const status = e.response.status

        switch (status) {
          case 404:
          default:
            console.error("Impossible to get menu options")
        }
      }
    }
  }

  // useEffect(() => {
  //   getMenuOptions()
  // }, [])

  return (
    <BrowserRouter>
      <Styles className="App">
        <Menu
          options={menuOptions}
        />
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path={["/", "/home"]} component={LazyHome} exact />
            <Route path="/our-treatments" component={LazyTreatments} />
            <Route path={["/appointment-confirmed", "/purchase-confirmed"]} component={LazyConfirmation} exact />
            <Route path={"/product"} component={LazyProduct} />
            <Route path={["/contact-me", "/contact"]} component={LazyContact} />
            <Route path={["/about-us"]} component={LazyAbout} />
            <Route component={Lazy404} />
          </Switch>
        </Suspense>
        <Footer />
      </Styles>
    </BrowserRouter>
  );
}

export default App;
