import {PageDescriptor} from '@enonic-types/core';
import type {ComponentProcessor} from '@enonic-types/lib-react4xp/DataFetcher';

export const helloProcessor: ComponentProcessor<PageDescriptor> = (params) => {
    return {
        title: `${params.content.displayName}`,
        initialCount: 0,
    };
};
