import React from 'react';
import styles from './MoviePage.module.css';
import { Part } from "@enonic/react-components";

export const Movie = (props) => {
    const {
        name, // Movie title
        subtitle, // Subtitle
        photo, // First photo
        restPhotos, // Additional photos
        trailer, // URL for the trailer
        abstract, // Abstract description
        release, // Release date
        website, // Website link
        cast, // Cast members
        descriptor,
        componentRegistry,
        casts,
        director,
        ...partProps
    } = props;
    return (
        <Part {...partProps}>
            <div className={styles.moviePage}>
                <header>
                    <h1><a className={styles.sneakyLink} href={trailer}>{name}</a></h1>
                </header>

                <main className={styles.main}>
                    <div className={styles.flexy}>
                    {/* First Photo */}
                        {photo && (
                            <section className={styles.firstPhoto}>
                                <h3>Featured Image</h3>
                                <img
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    title={photo.title}
                                    className={styles.featuredImage}
                                />
                            </section>
                        )}


                        <div className={styles.blocky}>

                            {/* Release Date and Website */}
                            <div>

                                {website && (
                                    <h3>
                                        <a className={styles.sneakyLink} href={website} target="_blank" rel="noopener noreferrer">
                                            Official Website
                                        </a>
                                    </h3>
                                )}
                                {release && (
                                    <p>Release Date: {release}</p>
                                )}

                            </div>

                            {/* Cast */}
                            {cast.length > 0 && (
                                <section className={styles.cast}>
                                    <h3>Cast</h3>
                                    <ul>
                                        {cast.map((member, index) => (
                                            <li key={index}>
                                                <a className={styles.sneakyLink} href={member.castUrl}><img src={member.photoUrl} alt={member.actorName} /></a>
                                                <p>
                                                    <a className={styles.sneakyLink} href={member.castUrl}><strong>{member.actorName}</strong> as {member.character}</a>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                    {/* Director */}
                    {director && (
                        <section>
                            <h3>Director</h3>
                            <h4><a className={styles.sneakyLink} href={director.url}>{director.name}</a></h4>
                            <a href={director.url}><img className={styles.directorImg} src={director.photo} alt={director.name} /></a>
                        </section>
                    )}





                        </div>



                    </div>


                    <h2>{subtitle}</h2>
                    {/* Abstract */}
                    <section className={styles.abstract}>
                        <p>{abstract}</p>
                    </section>
                    {/* Additional Photos */}
                    {restPhotos && restPhotos.length > 0 && (
                        <section className={styles.photos}>
                            <h3>Photos</h3>
                            <div className={styles.photoGrid}>
                                {restPhotos.map((photo, index) => (
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