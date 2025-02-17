import type { Content } from '@enonic-types/lib-content';
import type { ContentTypeProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
import { get as getContentByKey } from '/lib/xp/content';
import { imageUrl, componentUrl, pageUrl } from '/lib/xp/portal';

// Function to fetch additional photos and return their image URLs
function fetchAdditionalPhotos(photoIds: string[]) {
    return photoIds.map(photoId => {
        const photoContent = getContentByKey<Content>({ key: photoId });
        return photoContent
            ? {
                _id: photoContent._id,
                title: photoContent.displayName,
                imageUrl: imageUrl({ id: photoContent._id, scale: 'width(250)' }) // Smaller images for additional photos
            }
            : null;
    }).filter(Boolean); // Filter out null entries in case a photo is missing
}

// Function to fetch detailed information for each movie
function fetchMovies(movieIds: string[]) {
    return movieIds.map(movieId => {
        const movieContent = getContentByKey<Content>({ key: movieId });
        if (!movieContent) {
            return {
                _id: movieId,
                title: '(Unknown Movie)',
                movieUrl: '#',
                photo: null, // No photo available for missing movies
                restPhotos: []
            };
        }

        // Extract photos from movie content
        const photos = movieContent.data.photos;
        const firstPhotoId = Array.isArray(photos) ? photos[0] : photos; // First photo ID
        const remainingPhotoIds = Array.isArray(photos) ? photos.slice(1) : []; // Remaining photo IDs

        // Fetch the first photo
        const firstPhotoContent = getContentByKey<Content>({ key: firstPhotoId });
        const firstPhoto = firstPhotoContent
            ? {
                _id: firstPhotoContent._id,
                title: firstPhotoContent.displayName,
                imageUrl: imageUrl({ id: firstPhotoContent._id, scale: 'width(500)' }) // Larger image for the first photo
            }
            : null;

        // Fetch remaining photos
        const restPhotos = fetchAdditionalPhotos(remainingPhotoIds);

        return {
            _id: movieContent._id,
            title: movieContent.displayName,
            movieUrl: pageUrl({ path: movieContent._path }),
            photo: firstPhoto, // Primary photo
            restPhotos // Additional photos
        };
    });
}

export const playlistProcessor: ContentTypeProcessorFunction<Content<Record<string, unknown>>> = params => {
    const content = params.content;
    const playlistData = content.data;

    // Ensure playlist data is valid
    if (!playlistData || !Array.isArray(playlistData.list)) {
        throw new Error(`Invalid playlist data for content ID: ${content._id}`);
    }

    // Fetch movies with additional photo data
    const movies = fetchMovies(playlistData.list);

    return {
        props: {
            playlist: {
                _id: content._id,
                displayName: content.displayName,
                description: playlistData.description || 'No description available.',
                movies: movies // Movies with image data included
            }
        }
    };
};