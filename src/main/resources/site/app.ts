import type { Request, Response } from '@enonic-types/core';
import type { AppProps } from '/types/AppProps';
import { getContent } from '/lib/xp/portal';
import { render } from '/lib/enonic/react4xp';
import { dataFetcher } from '../react4xp/dataFetcher';
import {assetUrl} from '/lib/enonic/asset';


export function get(request: Request): Response {
	const url = assetUrl({path: 'images/Icon-XP.svg'});
	const content = getContent();
	const {
		component,
		response
	} = dataFetcher.process({
		content, // Since it's already gotten, pass it along, so DataFetcher doesn't have to get it again.
		request,
	});
	if (response) {
		return response; // This also handles the special case when ContentStudio needs 418.
	}
	const props: AppProps = {
		component,
		url
	}
	const react4xpId = `react4xp_${content._id}`;
	const htmlBody = `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>${content.displayName}</title>
		</head>
		<body style="margin: 0; padding: 0;">
			<div id="${react4xpId}"></div>
		</body>
	</html>`;

	const output = render(
		'App',
		props,
		request,
		{
			body: htmlBody,
			id: react4xpId,
		}
	);

	return output;
}
