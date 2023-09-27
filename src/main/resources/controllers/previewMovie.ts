const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

const forceArray = maybeArray => {
    if (Array.isArray(maybeArray)) {
        return maybeArray;
    }
    return (maybeArray) ? [maybeArray] : [];
};

export function get(request) {
    const content = portal.getContent();            // <1>

    const props = {
        imageUrl: content.data.image ?
            portal.imageUrl({                       // <2>
                id: content.data.image,
                scale: 'width(300)'
            }) :
            undefined,
        title: content.displayName,
        description: content.data.description,
        year: content.data.year,
        actors: forceArray( content.data.actor )   // <3>
            .map( actor => (actor || '').trim())
            .filter(actor => !!actor)
    };

    const id = content._id;                         // <4>

    const output = React4xp.render(
        'Movie',                                    // <5>
        props,
        request,
        {
            id,
                                                    // <6>
            body: `
                <html>
                    <head>
                        <meta charset="UTF-8" />
                        <title>${content.displayName}</title>
                    </head>
                    <body class="xp-page">
                        <div id="${id}"></div>
                    </body>
                </html>
            `
        }
    );

    output.body = '<!DOCTYPE html>' + output.body;  // <7>

    return output;
};
