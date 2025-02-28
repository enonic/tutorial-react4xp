import type {Request, Response} from '@enonic-types/core';
import type {AppProps} from '/types/AppProps';
import {getContent, pageUrl} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';
import {dataFetcher} from '../react4xp/dataFetcher';
import {assetUrl} from '/lib/enonic/asset';
import {type Content, get as getContentByKey} from '/lib/xp/content';

export function get(request: Request): Response {
    const url = assetUrl({path: 'images/Icon-XP.svg'});
    let content = getContent();
    if (content.type == "base:shortcut") {
        const targetId: string = content.data.target as string
        if (targetId) {
            content = getContentByKey<Content>({key: targetId});
            if (content) {
                return {
                    status: 302,
                    redirect: pageUrl({path: content._path})
                };
            }
        }
        return {
            status: 404
        }
    }

    const {
        component,
        response
    } = dataFetcher.process({
        content, // Since it's already gotten, pass it along, so DataFetcher doesn't have to get it again.
        request,
    });

    //log.info(JSON.stringify(request, null, 2))
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
		<body class="noMarginNoPadding">
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
