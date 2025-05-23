import {render} from '/lib/enonic/react4xp';
import {getContent} from '/lib/xp/portal';
import type {Enonic} from '@enonic/js-utils/types/Request';
import type {PageComponentProps} from './default.d';


export function get(request: Enonic.Xp.Http.Request) {
    const content = getContent();

    const {page: entry} = content;

    const react4xpId = `react4xp_${content._id}`;

    const props: PageComponentProps = {
        regionsData: content.page.regions,
        names: "main",
        tag: "main",
    };

    const htmlBody = `<!DOCTYPE html><html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${content.displayName}</title>
	</head>
	<body class="xp-page">
		<div id="${react4xpId}"></div>
	</body>
</html>`;

    const output = render(
        entry,
        props,
        request,
        {
            body: htmlBody,
            hydrate: false,
            id: react4xpId,
        }
    );

    return output;
}
