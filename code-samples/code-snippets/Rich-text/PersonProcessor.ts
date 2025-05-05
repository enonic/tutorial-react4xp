import {processHtml} from '/lib/enonic/react4xp';

...

return {
	...
		parent
:
parentPath(params.request.path),
	bio
:
`${params.content.data.bio}`,
	bioHtml
:
processHtml({
	value: params.content.data.bio as string,
	imageWidths: [200, 400, 800],
}),
}
;
}
;