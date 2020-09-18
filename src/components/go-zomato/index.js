import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import Header from './header';
import { getCities, searchRestaurants } from './api';
import { parseCitySuggestions, parseSearchRestaurants } from './utils';
import Restaurants from './restaurants';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const ApiCall = (cityQuery) => {
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      const cities = parseCitySuggestions(await getCities(cityQuery));
      setCitySuggestions(cities);

      if (cities.length > 0) {
        const restaurants = parseSearchRestaurants(
          await searchRestaurants(cities[0].id)
        );
        setRestaurants(restaurants);
      }
    };

    searchRestaurantsFromCity();
  }, []);
};

const Home = () => {

  return (
    <div className={styles.center}>
      <div className={styles.main}>
        <Header/>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
