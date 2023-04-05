import React from 'react';
import styles from './HeroImage.module.css'

function HeroImage (props: any) {
    return (
        <div className={styles.hero_container}>
            <img className={styles.hero_img} src={props.image} alt={props.alt} />
            <h1 className={styles.hero_title}>{props.title}</h1>
            <h4 className={styles.hero_subtitle}>{props.subtitle}</h4>
        </div>
    );
}

export default HeroImage;