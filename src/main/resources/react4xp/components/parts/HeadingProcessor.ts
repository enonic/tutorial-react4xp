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