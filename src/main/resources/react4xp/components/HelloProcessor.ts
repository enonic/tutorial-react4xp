import type {ComponentProcessorFunction} from '@enonic-types/lib-react4xp/DataFetcher';
import {PageDescriptor} from '@enonic-types/core';

export const helloProcessor: ComponentProcessorFunction<PageDescriptor> = (params) => {

    return /*<HelloProps>*/{
        title: `React4XP: ${params.content.displayName}`,
        text: 'Welcome to the React4XP starter!',
    };
};
