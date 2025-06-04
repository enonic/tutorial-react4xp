import {processHtml} from '/lib/enonic/react4xp';

...


export const personProcessor: ComponentProcessorFunction<PageDescriptor>
    = (params) => {
...

    return {
        displayName: `${params.content.displayName}`,
        photo: {
            _id,
            title: displayName,
            imageUrl: imageUrl({id: _id, scale: 'block(1200, 675)'})
        },
        birthDate: params.content.data.dateofbirth,
        restPhotos: extraPhotos,
        bio: `${params.content.data.bio}`,
        bioHtml: processHtml({
            value: params.content.data.bio as string,
            imageWidths: [200, 400, 800],
        })
    };
};