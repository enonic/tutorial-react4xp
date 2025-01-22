import type { Content } from '@enonic-types/lib-content';
import type { ContentTypeProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';

type MyType = ContentTypeProcessorFunction<Content<Record<string, unknown>>>

export const helloProcessor: MyType = (params) => {
	// log.info('helloProcessor params:%s', toStr(params));
	return {
		props: /*<HelloProps>*/{
			title: `React4XP: ${params.content.displayName}`,
			text: 'Welcome to the React4XP starter!',
		}
	};
};
