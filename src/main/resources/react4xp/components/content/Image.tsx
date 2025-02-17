import React from 'react';
import styles from './Image.module.css';

export const Image = (props: any) => {
    const { name, url, altName } = props.image;


    return (
        <div className={styles.imgContainer}>
            <img src={ url } alt={ altName } title={ name }/>
        </div>
    );
};