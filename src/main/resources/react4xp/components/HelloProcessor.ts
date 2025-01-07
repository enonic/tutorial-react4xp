import type { Site } from '@enonic-types/lib-content';
import type { ContentTypeProcessorFunction } from '@enonic-types/lib-react4xp/DataFetcher';
// import type { PortalSiteProps } from '/types/PortalSiteProps';

// import { toStr } from '@enonic/js-utils/value/toStr';

export const helloProcessor: ContentTypeProcessorFunction<
	Site<Record<string, unknown>>
> = (params) => {
	// log.info('helloProcessor params:%s', toStr(params));
	const {
		content: {
			displayName: siteDisplayName
		}
	} = params;
	return {
		props: /*<HelloProps>*/{
			title: `React4XP Starter: ${siteDisplayName}`,
			text: 'Welcome to the React4XP starter!',
		}
	};
};
