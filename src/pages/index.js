import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import 'add-to-calendar-button';



import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent));
  }, []);


  //const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <div className={styles.buttons}>
        <h1 className={styles.textHero}>14 • 09 • 2024</h1>
        <h2 className={styles.textHero1}>Atlixco, Puebla.</h2>

        <div className={styles.btnCalendar}>
          {isIOS ? (
              <add-to-calendar-button
                name="Boda de Angie & Diego"
                startDate="2024-09-14"
                endDate="2024-09-14"
                startTime="15:00"
                endTime="23:59"
                description='[h1]Save the date! 🥳[/h1]'
                timeZone="America/Mexico_City"
                location='Atlixco, Puebla'
                options="'Apple','Google'"
                buttonsList
                hideTextLabelButton
                buttonStyle="round"
                lightMode="bodyScheme"
              ></add-to-calendar-button>
            ) : (
              <add-to-calendar-button
                name="Boda de Angie & Diego"
                startDate="2024-09-14"
                endDate="2024-09-14"
                startTime="15:00"
                endTime="23:59"
                description= '[h1]Save the date! 🥳[/h1]'
                timeZone="America/Mexico_City"
                location='Atlixco, Puebla'
                options="'Google'"
                buttonsList
                hideTextLabelButton
                buttonStyle="round"
                lightMode="bodyScheme"
              ></add-to-calendar-button>
            )}
        </div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}