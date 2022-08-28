import React, { useEffect, useState } from 'react';

import '../styles/globals.css'
import Layout from '../layouts/layout'
import fetchCategories from '../utils/categoryProvider'
import { GetListCategoriesAPI, StatusAccept } from '../server/api';

const axios = require('axios').default;



function Ecommerce({ Component, pageProps, categoriess }) {
  // console.log('app.js-categories:', categories)
  // categories = [];
  const [categories,setCategories] = useState([]);

  const getCategories = () => {
    axios.get(GetListCategoriesAPI)
      .then(function (response) {
        // handle success
        console.log('getCategories ok', response.data)
        if (response.data.status_code === StatusAccept) {
          setCategories(response.data.categories)
        }
        return response.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
  )
}

Ecommerce.getInitialProps = async () => {
  const categoriess= await fetchCategories()
  return {
    categoriess
  }
}

export default Ecommerce