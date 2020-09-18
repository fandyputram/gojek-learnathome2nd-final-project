import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { getCities, searchRestaurants } from './api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
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
        <div className={styles.header}>
          <img
            className={styles.logo}
            src="/assets/logo.png"
            alt="Go-Zomato logo"
          />
          <div className={styles.countsRow}>
            <InputText placeholder="Current city"/>
            <Button label="Change City" className="p-button-success"/>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
