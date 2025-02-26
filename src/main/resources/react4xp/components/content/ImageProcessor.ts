import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {imageUrl} from '/lib/xp/portal';
import {PageDescriptor} from '@enonic-types/core';


export const imageProcessor: ComponentProcessorFunction<PageDescriptor> = params => {
    const content = params.content;

    return {
        image: {
            name: content.displayName,
            url: imageUrl({id: content._id, scale: 'width(1000)'}),
            altName: content._name
        }
    };
};
