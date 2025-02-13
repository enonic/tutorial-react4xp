import type {Content} from '@enonic-types/lib-content';
import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {imageUrl} from '/lib/xp/portal';
import {get as getContentByKey} from '/lib/xp/content';
import {PageDescriptor} from '@enonic-types/core';

/* interface Photo {
	_id: string;
	displayName: string;
  } */

export const personProcessor: ComponentProcessorFunction<PageDescriptor>
    = (params) => {

    const photos = params.content.data.photos;
    const firstPhotoId = Array.isArray(photos) ? photos[0] : photos;

    // Fetch the first photo
    const {_id, displayName} = getContentByKey<Content>({key: firstPhotoId});

    return /*<PersonProps>*/{
        displayName: `${params.content.displayName}`,
        photo: {
            _id,
            title: displayName,
            imageUrl: imageUrl({id: _id, scale: 'width(500)'})
        }
    };
};
