import Footer from '/react4xp/components/common/Footer';
import React, {useEffect, useRef, useState} from 'react';
import styles from './Playlist.module.css';
import type {ComponentProps} from '@enonic/react-components';


export const Playlist = (props: ComponentProps) => {
    const playlistRef = useRef(null);
    const [playlistHeight, setPlaylistHeight] = useState(0);

    useEffect(() => {
        if (playlistRef.current) {
            const height = playlistRef.current.offsetHeight;
            setPlaylistHeight(height); // Set the height in the state
        }
    }, [props]);

    const {displayName, description, movies, footerUrl} = props.data.playlist as any;
    return (
        <>
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
                    <ul ref={playlistRef} className={styles.flowX}>
                        {movies.map((movie: any, index: number) => (
                            <li className={styles.movieItem} key={movie._id || index}>
                                <a className={styles.movie} href={movie.movieUrl}>
                                    <h2>{movie.title}</h2>
                                    <p className={styles.subTitle}>{movie.subtitle}</p>
                                    {movie.photo ? (
                                        <div className={styles.photoBanner}>
                                            <img
                                                src={movie.photo.imageUrl}
                                                alt={movie.photo.title}
                                                title={movie.photo.title}
                                                height={740}
                                                width={500}
                                                loading="eager"
                                            />
                                        </div>
                                    ) : (
                                         <p className={styles.noPhoto}> No image available</p>
                                     )}
                                    <p className={styles.movieDescription}>{movie.description}</p>
                                    {movie.restPhotos && movie.restPhotos.length > 0 && (
                                        <div className={styles.photoContainer}>
                                            <div className={styles.additionalPhotos}>
                                                {movie.restPhotos.map((photo: any, photoIndex: number) => (
                                                    <img
                                                        key={photoIndex}
                                                        src={photo.imageUrl}
                                                        alt={photo.title}
                                                        title={photo.title}
                                                        height={150}
                                                        width={238}
                                                        loading="lazy"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                     <p className={styles.noMovies}>No movies in this playlist.</p>
                 )}
            </div>
            <div className={styles.mobileFooter}
                 style={{position: 'absolute', top: `calc(${playlistHeight}px + 300px)`, minHeight: 'fit-content'}}>
                <Footer logoUrl={footerUrl}/>
            </div>
        </>
    );
};
