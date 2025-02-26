import React from 'react';
import styles from './MoviePage.module.css';
import {Part} from "@enonic/react-components";

export const Movie = (props) => {
    // All properties are accessed via props object
    return (
        <Part {...props}>
            <div className={styles.moviePage}>
                <header>
                    <h1><a href={props.trailer} className={styles.sneakyLink}>{props.name}</a></h1>
                </header>

                <main className={styles.main}>
                    <div className={styles.flexy}>
                        {/* First Photo */}
                        {props.photo && (
                            <section className={styles.firstPhoto}>
                                <img
                                    src={props.photo.imageUrl}
                                    alt={props.photo.title}
                                    title={props.photo.title}
                                    className={styles.featuredImage}
                                />
                            </section>
                        )}

                        <div className={styles.blocky}>
                            {/* Release Date and Website */}
                            <div>
                                {props.website && (
                                    <h3>
                                        <a href={props.website} className={styles.sneakyLink} target="_blank" rel="noopener noreferrer">
                                            Official Website
                                        </a>
                                    </h3>
                                )}
                                {props.release && <p>Release Date: {props.release}</p>}
                            </div>

                            {/* Cast */}
                            {props.cast.length > 0 && (
                                <section className={styles.cast}>
                                    <h3>Cast</h3>
                                    <ul>
                                        {props.cast.map((member, index) => (
                                            <li key={index}>
                                                <a className={styles.sneakyLink} href={member.castUrl}><img src={member.photoUrl} alt={member.actorName} /></a>
                                                <p>
                                                    <a className={styles.sneakyCastLink}
                                                       href={member.castUrl}><strong>{member.actorName}</strong> as {member.character}
                                                    </a>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Director */}
                            {props.director && (
                                <section>
                                    <h3>Director</h3>
                                    <a href={props.director.url} className={styles.sneakyLink}>
                                        <h4>{props.director.name}</h4>
                                        <img className={styles.directorImg} src={props.director.photo} alt={props.director.name} />
                                    </a>
                                </section>
                            )}
                        </div>
                    </div>

                    <h2>{props.subtitle}</h2>

                    {/* Abstract */}
                    <section className={styles.abstract}>
                        <p>{props.abstract}</p>
                    </section>

                    {/* Additional Photos */}
                    {props.restPhotos && props.restPhotos.length > 0 && (
                        <section className={styles.photos}>
                            <h3>More Photos</h3>
                            <div className={styles.photoGrid}>
                                {props.restPhotos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo.imageUrl}
                                        alt={photo.title}
                                        title={photo.title}
                                        className={styles.photoImg}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </Part>
    );
};
