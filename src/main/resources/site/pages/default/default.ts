
import {getContent} from '/lib/xp/portal';
import {render} from '/lib/enonic/react4xp';

export function get(request) {
    const content = getContent();
    const entry = content.page;

    const id = `react4xp_${content._id}`;   // <1>

    const props = {
        regionsData: content.page.regions,  // <2>
        names: "main",                      // <3>
        tag: "main",                        // <4>
    };

    return render(
        entry,
        props,
        null,                               // <5>
        {
            id,
            body: `
                <html>
                    <head>
                        <title>${content.displayName}</title>
                    </head>
                    <body class="xp-page">
                        <div id="${id}"></div>
                    </body>
                </html>
            `
        }
    );
};
