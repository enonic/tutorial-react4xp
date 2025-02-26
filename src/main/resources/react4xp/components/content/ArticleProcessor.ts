import type {Content} from '@enonic-types/lib-content';
import type {ContentTypeProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {imageUrl, pageUrl} from '/lib/xp/portal';
import {processHtml} from '/lib/enonic/react4xp';
import {get as getContentByKey} from "/lib/xp/content";
import {assetUrl} from '/lib/enonic/asset';
import {toArray} from "/react4xp/utils/arrayUtils";


export const articleProcessor: ContentTypeProcessorFunction<Content<Record<string, unknown>>> = (params) => {
    const url = assetUrl({path: 'images/Icon-XP.svg'});
    const { content } = params;
    const { data } = content;

    // Process the cast
    const spotlight = toArray<string>(data.spotlight as string | string[]).map(spotlightKey => {

        const spotlightContent = getContentByKey<Content>({key: spotlightKey});




        const photos: string [] = toArray<string>(spotlightContent.data.photos as string | string[])
        const firstPhotoId = photos[0] || ''; // Safely access the first ID


        return {
            name: spotlightContent.displayName,
            photoUrl: imageUrl({ id: firstPhotoId, scale: 'width(250)' }),
            id: spotlightContent._id,
            url: pageUrl({ path: spotlightContent._path })
        };
    });


    const processedBlocks = toArray<any>(data.blocks).map(block => {

        if (block._selected === 'banner' && block.banner?.text) {
            // Banner block
            return {
                type: 'banner',
                banner: {
                    text: block.banner.text,
                    imageUrl: imageUrl({ id: block.banner.image, scale: 'width(250)' })
                },
            };
        }

        if (block._selected === 'text' && block.text?.text) {
            // Text block, process its HTML
            return {
                type: 'text',
                text: processHtml({
                    value: block.text.text,
                    imageWidths: [200, 400, 800],
                }),
            };
        }

        if (block._selected === 'quote' && block.quote?.text) {
            // Quote block
            return {
                type: 'quote',
                quote: {
                    text: block.quote.text,
                    byline: block.quote.byline || '',
                },
            };
        }
        const storyArray = toArray(block.story.panel)
        if (block._selected === 'story' && storyArray) {

            // Story block with multiple panels
            const panels = storyArray.map(panel => ({
                image: panel.image,
                imageUrl: imageUrl({ id: panel.image, scale: 'width(250)' }),
                storyline: panel.storyline || '',
            }));
            return {
                type: 'story',
                story: panels,
            };
        }

        return null;
    }).filter(Boolean);

    // Return the additional properties for the page


    const cover = data.coverimage as string

    return {
        props: {
            title: content.displayName,
            coverImage: imageUrl({ id: cover, scale: 'block(864, 486)' }),// Adjust the scale to your needs
            preface: data.preface || null,
            author: data.author || null,
            tags: data.tags || [],
            blocks: processedBlocks,
            spotlight,
            url
        },
    };
};
