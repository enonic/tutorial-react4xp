//import type { PersonProps } from '/types/PersonProps';
import React from 'react'
//import * as React from 'react';
import styles from './Person.module.css';
import { RichText } from '@enonic/react-components';

export const Person = (props) => {
    const {displayName, photo, restPhotos, bioHtml} = props as any;
    return (
        < >
            <div className={styles.person}>
                <h2>{displayName}</h2>
                {
                    photo ? (
                        <>
                        <h4 className={styles.photosheader}>Photos</h4>
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
                            <h4 className={styles.photosheader}>Other Photos</h4>
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
            <div>
                {/*<div>
                {parse(`${bioHtml}`)}
                </div>
                <div>{parse(bioHtml)}</div>


              <div dangerouslySetInnerHTML={{__html: bioHtml}} />
              */}
              <RichText data={{processedHtml:bioHtml}} />

            </div>

            </div>
        </>
    )
}