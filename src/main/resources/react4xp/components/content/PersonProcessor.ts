import type {Content} from '@enonic-types/lib-content';
import type {ContentTypeProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {imageUrl} from '/lib/xp/portal';
import {get as getContentByKey} from '/lib/xp/content';
import {toArray} from "/react4xp/utils/arrayUtils";
import {processHtml} from "/lib/enonic/react4xp";


function fetchAdditionalPhotos(photosIds) {
	return photosIds.map(photoId => {
	  const photoContent = getContentByKey<Content>({ key: photoId });
	  return {
		_id: photoContent._id,
		title: photoContent.displayName,
		imageUrl: imageUrl({ id: photoContent._id, scale: 'width(250)' })
	  };
	});
  }

/* interface Photo {
	_id: string;
	displayName: string;
  } */

export const personProcessor: ContentTypeProcessorFunction<Content<Record<string, unknown>>>
= (params) => {



	const photos: string[] = toArray<string>(params.content.data.photos as string | string[])
	const firstPhotoId = photos[0] || '';
	const remainingPhotoIds = photos.slice(1) || '';

	// Fetch the first photo
	const {_id, displayName} = getContentByKey<Content>({ key: firstPhotoId });

	const extraPhotos = fetchAdditionalPhotos(remainingPhotoIds);

	return {
		props: /*<PersonProps>*/{
			displayName: `${params.content.displayName}`,
			photo: {
				_id,
				title: displayName,
				imageUrl: imageUrl({id: _id, scale: 'width(500)'})
			},
			bio: `${params.content.data.bio}`,
			bioHtml: processHtml({
				value: params.content.data.bio as string,
				imageWidths: [200, 400, 800],
			}),
			birthDate: params.content.data.dateofbirth,
			restPhotos: extraPhotos,
		}
	};
};
