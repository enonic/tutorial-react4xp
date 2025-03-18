import React from 'react';
import styles from './Playlist.module.css';

export const Playlist = (props: any) => {
    const {displayName, description, movies} = props.playlist;

    return (


        <div className={styles.playlist}>


            <style>
                {`
                body {
                    width: 100vw;
                    max-width: 100vw; /* Ensuring body does not exceed the width of the viewport */
                }
                `}
            </style>


            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{displayName}</h1>
            <p className={styles.description}>{description}</p>
            </div>
            {movies && movies.length > 0 ? (
                <ul className={styles.flowX}>
                    {movies.map((movie: any, index: number) => (
                        <li className={styles.movieItem} key={movie._id || index}>
                            <h2><a className={styles.link} href={movie.movieUrl}>{movie.title}</a></h2>
                            <p className={styles.subTitle}>{movie.subtitle}</p>
                            {movie.photo ? (
                                <div className={styles.photoBanner}>
                                    <a href={movie.movieUrl}>
                                        <img
                                            src={movie.photo.imageUrl}
                                            alt={movie.photo.title}
                                            title={movie.photo.title}

                                        />
                                    </a>
                                </div>
                            ) : (
                                 <p className={styles.noPhoto}> No image available</p>
                            )}
                            <p className={styles.movieDescription}>{movie.description}</p>
                            {movie.restPhotos && movie.restPhotos.length > 0 && (
                                <div className={styles.additionalPhotos}>
                                    {movie.restPhotos.map((photo: any, photoIndex: number) => (
                                        <a href={movie.movieUrl}>
                                        <img
                                            key={photoIndex}
                                            src={photo.imageUrl}
                                            alt={photo.title}
                                            title={photo.title}
                                        />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                 <p className={styles.noMovies}>No movies in this playlist.</p>
            )}
        </div>
    );
};