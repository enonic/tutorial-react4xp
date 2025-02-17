import React from 'react';
import styles from './Playlist.module.css';

export const Playlist = (props: any) => {
    const { displayName, description, movies } = props.playlist;

    return (
        <div className={styles.playlist}>
            <h2 className={styles.title}>{displayName}</h2>
            <p className={styles.description}>{description}</p>

            {movies && movies.length > 0 ? (
                <ul>
                    {movies.map((movie: any, index: number) => (
                        <li className={styles.movieItem} key={movie._id || index} >
                            <h3><a className={styles.link} href={movie.movieUrl}>{movie.title}</a></h3>
                            {movie.photo ? (
                                <div>
                                    <a href={movie.movieUrl}>
                                    <img
                                        src={movie.photo.imageUrl}
                                        alt={movie.photo.title}
                                        title={movie.photo.title}

                                    />
                                    </a>
                                </div>
                            ) : (
                                <p>No image available</p>
                            )}
                            {movie.restPhotos && movie.restPhotos.length > 0 && (
                                <div>
                                    {movie.restPhotos.map((photo: any, photoIndex: number) => (
                                        <img
                                            key={photoIndex}
                                            src={photo.imageUrl}
                                            alt={photo.title}
                                            title={photo.title}
                                        />
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies in this playlist.</p>
            )}
        </div>
    );
};