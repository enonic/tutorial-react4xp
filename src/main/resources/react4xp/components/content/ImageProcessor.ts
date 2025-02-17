import type { Content } from '@enonic-types/lib-content';
import type { ContentTypeProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
import { get as getContentByKey } from '/lib/xp/content';
import { imageUrl, componentUrl, pageUrl } from '/lib/xp/portal';



export const imageProcessor: ContentTypeProcessorFunction<Content<Record<string, unknown>>> = params => {
    const content = params.content;

    return {
        props: {
            image: {
                name: content.displayName,
                url: imageUrl({id: content._id, scale: 'width(1000)'}),
                altName: content._name
            }
        }
    };
};