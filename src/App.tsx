import React, { useState, useEffect } from 'react';
import Styles from './App.styled'
import Menu from './shared/Menu'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './home/Home'
import Product from './product/Product'
import Confirmation from './confirmation/Confirmation'
import _404 from './_404/404'
import Footer from './shared/Footer';
import axios from 'axios'
import Contact from './contact/Contact';

const { REACT_APP_SERVER_ADDRESS } = process.env

const App = () => {
  const [menuOptions, setMenuOptions] = useState<{ name: string, url: string }[]>(
    [
      { name: 'Chloe', url: 'product?product_ref=8da89u131' },
      { name: 'Anabelle', url: 'product?product_ref=1297jnasd87' },
      { name: 'Destiny', url: 'product?product_ref=8s6hhb154a' },
      { name: 'Amirah', url: 'product?product_ref=ysda663zj6' },
      { name: 'Aliyah', url: 'product?product_ref=uhsd67531vt' }
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

  useEffect(() => {
    getMenuOptions()
  }, [])

  return (
    <BrowserRouter>
      <Styles className="App">
        <Menu
          options={menuOptions}
        />
        <Switch>
          <Route path={["/", "/home"]} component={Home} exact />
          <Route path={["/appointment-confirmed", "/purchase-confirmed"]} component={Confirmation} exact />
          <Route path={"/product"} component={Product} />
          <Route path={["/contact-me", "/contact"]} component={Contact} />
          <Route path={["/not-found", "/404", "/not-found-404", "/404-not-found"]} component={_404} />
        </Switch>
        <Footer />
      </Styles>
    </BrowserRouter>
  );
}

export default App;
