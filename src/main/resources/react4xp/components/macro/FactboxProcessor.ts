import type {ComponentProcessor} from '@enonic-types/lib-react4xp/DataFetcher';

export const factboxProcessor: ComponentProcessor<'com.enonic.app.hmdb:factbox'/*, MacroProcessorParams*/> = (params) => {
    // TODO: change when types are updated
    const macro = params['macro'];

    return {
        ...macro.config['factbox']
    };
};
