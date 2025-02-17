import type { Content } from '@enonic-types/lib-content';
import type { PartComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
import {imageUrl, pageUrl} from '/lib/xp/portal';
import { get as getContentByKey } from '/lib/xp/content';

function fetchAdditionalPhotos(photoIds: string[]) {
    return photoIds.map(photoId => {
        const photoContent = getContentByKey<Content>({ key: photoId });
        return {
            _id: photoContent._id,
            title: photoContent.displayName,
            imageUrl: imageUrl({ id: photoContent._id, scale: 'width(250)' }) // Image scaled for remaining photos
        };
    });
}

export const movieProcessor: PartComponentProcessorFunction<'com.enonic.app.hmdb:movie-details'> = (params) => {
    const data = params.content.data;

    // Extract the photos from content.data
    const photos = data.photos;
    const firstPhotoId = Array.isArray(photos) ? photos[0] : photos; // First photo ID
    const remainingPhotoIds = Array.isArray(photos) ? photos.slice(1) : []; // Remaining photo IDs

    // Fetch the first photo
    const firstPhotoContent = getContentByKey<Content>({ key: firstPhotoId });
    const firstPhoto = firstPhotoContent
        ? {
            _id: firstPhotoContent._id,
            title: firstPhotoContent.displayName,
            imageUrl: imageUrl({ id: firstPhotoContent._id, scale: 'width(600)' }), // Larger scale for first photo
            id: firstPhotoContent._id
        }
        : null;

    // Fetch remaining photos
    const restPhotos = fetchAdditionalPhotos(remainingPhotoIds);


    // Process the cast
    const cast = (Array.isArray(data?.cast) ? data.cast : []).map(castMember => {
        const actorContent = getContentByKey<Content>({ key: castMember.actor });
        const actorId = actorContent._id; // Extracted variable for clarity

        const actorUrl = actorContent;


        let photos = actorContent.data.photos;
        if (!Array.isArray(photos)) {
            photos = [photos]; // Convert to an array if it's not already
        }
        const firstPhotoId = photos[0]; // Safely access the first ID


        return {
            actorName: actorContent.displayName,
            photoUrl: imageUrl({ id: firstPhotoId, scale: 'width(250)' }),
            character: castMember.character,
            id: actorContent._id,
            castUrl: pageUrl({ path: actorContent._path })
        };
    });

    // Handle director only if it exists
    let director = null; // Default case if no director is available
    if (data.director) {
        // Execute lines 92-114 here
        const directorId = data.director as string; // Director ID from the "data" object

        const result = getContentByKey<Content>({ key: directorId });

        let directorPhotos = result.data.photos;
        if (!Array.isArray(directorPhotos)) {
            directorPhotos = [directorPhotos]; // Convert to an array if it's not already
        }
        const firstDirectorPhoto = directorPhotos[0];
        const directorTitle = result.displayName;
        const directorUrl = pageUrl({ path: result._path });

        director = {
            name: directorTitle,
            url: directorUrl,
            photo: imageUrl({ id: firstDirectorPhoto, scale: 'width(250)' })
        };
    }

    return {
        props: {
            name: params.content.displayName,
            subtitle: data.subtitle,
            trailer: data.trailer,
            abstract: data.abstract,
            release: data.release,
            photo: firstPhoto, // First photo
            restPhotos, // Remaining photos
            website: data.website,
            cast, // Cast members,
            director // Only include director if it exists
        }
    };
};