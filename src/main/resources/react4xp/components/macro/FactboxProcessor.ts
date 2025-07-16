import type {ComponentProcessor, MacroProcessorParams} from '@enonic-types/lib-react4xp/DataFetcher';

export const factboxProcessor: ComponentProcessor<'com.enonic.app.hmdb:factbox', MacroProcessorParams> = (params) => {
    const macro = params.macro;

    return {
        ...macro.config['factbox']
    };
};
