//import type { PersonProps } from '/types/PersonProps';
import {componentRegistry} from '/react4xp/componentRegistry';
import {RichText} from '@enonic/react-components';
import React from 'react'
//import * as React from 'react';
import styles from './Person.module.css';

export const Person = (props) => {
    const {displayName, photo, restPhotos, bioHtml, birthDate} = props as any;
    return (
        <div className={styles.person}>
            <h1>{displayName}</h1>
            <p>{birthDate}</p>
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
                    <div className={styles.photoContainer}>
                        <div className={styles.photoGrid}>
                            <div className={styles.photoScroll}>
                                {restPhotos.map((photo, index) => (
                                    <img key={index}
                                         src={photo.imageUrl}
                                         title={photo.title}
                                         alt={photo.title}
                                    />
                                ))}
                            </div>
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
