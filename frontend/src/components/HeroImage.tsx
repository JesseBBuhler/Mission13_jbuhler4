import React from 'react';
import './HeroImage.module.css'

function HeroImage (props: any) {
    const imageDescription = props.description || 'Undescribed header image';
    type Styles = {[key: string]: any;};
    const styles: Styles = {};
    if (props.height) {
        styles['--hero-image-height'] = props.height;
    }
    if (props.path) {
        styles['--hero-image'] = `url('${props.path}')`;
    }

    return (
        <div aria-label={imageDescription} className='hero' role='image' style={styles}>
            <div className="hero__image-blurred-bg"></div>
            <div className="hero__image"></div>
        </div>
    )
}

export default HeroImage;