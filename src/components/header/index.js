import React from 'react';
import styles from './styles.module.css';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img
                className={styles.logo}
                src="/assets/logo.png"
                alt="Go-Zomato logo"
            />
            <div className={styles.countsRow}>
                <InputText id="city" placeholder="Current city" />
                <Button label="Change City" />
            </div>
        </div>
    );
};

export default Header;