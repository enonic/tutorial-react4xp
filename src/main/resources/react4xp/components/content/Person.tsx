//import type { PersonProps } from '/types/PersonProps';
import {RichText} from '@enonic/react-components';
import React from 'react'
//import * as React from 'react';
import styles from './Person.module.css';
import {componentRegistry} from '/react4xp/componentRegistry';

export const Person = (props) => {
    const {displayName, photo, restPhotos, bioHtml, birthDate} = props as any;
    return (
        <div className={styles.person}>
            <div className={styles.flexy}>
                <h1>{displayName}</h1>
                <h2 className={styles.birth}>{birthDate}</h2>
            </div>
            <div>
                {
                    photo ? (
                        <>
                            <div className={styles.photos}>
                                <img src={photo.imageUrl}
                                     title={photo.displayName}
                                     alt={photo.displayName}
                                />
                            </div>
                        </>
                    ) : (
                        <p>No photo available</p>
                    )
                }
                {restPhotos && restPhotos.length > 0 && (
                    <div className={styles.restPhotosContainer}>
                        <div className={styles.restPhotos}>
                            {restPhotos.map((photo, index) => (
                                <img key={index}
                                     src={photo.imageUrl}
                                     title={photo.title}
                                     alt={photo.title}
                                     className={styles.restImg}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.richText}>
                <RichText data={bioHtml} componentRegistry={componentRegistry}/>

            </div>

        </div>
    )
}
