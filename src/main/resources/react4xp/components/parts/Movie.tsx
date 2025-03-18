import {Part} from "@enonic/react-components";
import React from 'react';
import styles from './MoviePage.module.css';

export const Movie = (props) => {
    // All properties are accessed via props object
    return (
        <Part {...props}>
            <div className={styles.moviePage}>
                <header>
                    <h1><a href={props.trailer} className={styles.sneakyTitle}>{props.name}</a></h1>
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
                            <div>
                            {/* Release Date and Website */}
                            <div>
                                {props.website && (
                                    <>
                                    <h2>
                                            Official Website
                                    </h2>
                                        <p className={styles.website}>
                                            <a href={props.website} className={styles.sneakyLink} target="_blank"
                                               rel="noopener noreferrer">
                                                {props.website}
                                            </a>
                                        </p>
                                    </>
                                )}
                                {props.release && <p className={styles.date}>Release Date: {props.release}</p>}
                            </div>

                            {/* Cast */}
                            {props.cast.length > 0 && (
                                <section className={styles.cast}>
                                    <h2>Cast</h2>
                                    <ul>
                                        {props.cast.map((member, index) => (
                                            <li key={index}>
                                                <a className={styles.sneakyLink} href={member.castUrl}><img
                                                    src={member.photoUrl} alt={member.actorName}/></a>
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
                            </div>
                            <div>
                            {/* Director */}
                            {props.director && (
                                <section>
                                    <h2>Director</h2>
                                    <a href={props.director.url} className={styles.sneakyLink}>
                                        <h3>{props.director.name}</h3>
                                        <img className={styles.directorImg} src={props.director.photo}
                                             alt={props.director.name}/>
                                    </a>
                                </section>
                            )}
                            </div>
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
                            <div className={styles.photoGrid}>
                                <div className={styles.photoScroll}>
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
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </Part>
    );
};
