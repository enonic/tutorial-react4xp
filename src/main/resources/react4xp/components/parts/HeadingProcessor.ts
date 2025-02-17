/*
import type { PageComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';

export const headingProcessor: PageComponentProcessorFunction<'com.enonic.app.hmdb:heading'> = ({ content }) => {
    return {
        props: {
            displayName: content.displayName,
        },
    };
};
*/


import type { PartComponentProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';

export const headingProcessor: PartComponentProcessorFunction<'com.enonic.app.hmdb:heading'> = ({ content, component }) => {

    const heading = component.config?.heading || content.displayName;
    
    return {
        props: {
            path: '/',
            type: 'part',
            descriptor: 'com.enonic.app.hmdb:heading',
            config: content || {},
            heading: heading,
            

        },
        
    };

};
//const props = headingProcessor;


/*  path: '/',
            type: 'part',
            descriptor: 'com.enonic.app.hmdb:heading',
            displayName: content.displayName,
            config: content || {},
            heading: heading,
 */