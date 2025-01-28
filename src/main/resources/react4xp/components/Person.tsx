//import type { PersonProps } from '/types/PersonProps';
import React from 'react'
//import * as React from 'react';
import styles from './Person.module.css';

export const Person = (props) => {
    const {displayName, photo} = props as any;
 
    return (
        < >
            <div className={styles.person}>
                <h2>{displayName}</h2>
                {
                    photo ? (
                        <img src={photo.imageUrl}
                             title={photo.displayName}
                             alt={photo.displayName}
                             width="500"
                        />
                    ) : (
                        <p>No photo available</p>
                    )
                }
            </div>
        </>
    )
}