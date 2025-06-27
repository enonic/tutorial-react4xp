import {componentRegistry} from '/react4xp/componentRegistry';
import {RichText, type ComponentProps} from '@enonic/react-components';
import React from 'react'
import styles from './Person.module.css';

export const Person = (props: ComponentProps) => {
    const {displayName, photo, restPhotos, bio, birthDate} = props.data as any;
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
                                     title={photo.title}
                                     alt={photo.title}
                                     height={675}
                                     width={1200}
                                     loading="eager"
                                />
                            </div>
                        </>
                    ) : (
                        <p>No photo available</p>
                    )
                }
                {restPhotos && restPhotos.length > 0 && (
                    <>
                        <h2>Photos</h2>
                        <div className={styles.photoContainer}>
                            <div className={styles.photoGrid}>
                                <div className={styles.photoScroll}>
                                    {restPhotos.map((photo, index) => (
                                        <img key={index}
                                             src={photo.imageUrl}
                                             title={photo.title}
                                             alt={photo.title}
                                             height={175}
                                             width={175}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {bio && (
                <>
                    <h2>Bio</h2>
                    <div className={styles.richText}>
                        <RichText
                            data={bio}
                            componentRegistry={componentRegistry}
                            loading="lazy"
                        />
                    </div>
                </>
            )}
        </div>
    )
}
