import type {PartComponent} from '@enonic-types/core';


import {getComponent} from '/lib/xp/portal';
import {React4xp} from '/lib/enonic/react4xp';
// @ts-expect-error No types for /lib/thymeleaf yet.
import {render as renderThymeleaf} from '/lib/thymeleaf';


declare global {
  interface XpPartMap {
    ['com.enonic.app.samples-react4xp:custom-flow']: {
      color: string
      greeting: string
      greetee: string
      things: string
      startCount: number
    }
  }
}


const VIEW = resolve('custom-flow-view.html');


export function get(request) {
    // Fetching data from the part config:
    const component = getComponent<PartComponent<'com.enonic.app.samples-react4xp:custom-flow'>>();
    const {
        color,
        greeting,
        greetee,
        things,
        startCount
    } = component.config;

    // Setting up the data-holding object for hello-react2.tsx:
    const helloObj = new React4xp(`site/pages/hello-react2/hello-react2`);     // <1>
    helloObj.setProps({                                                      // <2>
            message: greeting,
            messageTarget: greetee,
            droppableThing: things,
            initialCount: startCount
        })


    // Setting up colorObj, the data-holding object for color.tsx:
    const colorObj = new React4xp(`site/parts/color/color`);
    colorObj                                                                 // <3>
        .setProps({ color })
        .setId("myColorThing")                                               // <4>
        .uniqueId()                                                          // <5>


    // Using thymeleaf to render container HTML,
    // inserting the colorObj's ID into the target container where colorObj will be rendered:
    const thymeleafModel = {
        color: colorObj.props.color,
        targetId: colorObj.react4xpId
    }
    const colorSectionContainer = renderThymeleaf(VIEW, thymeleafModel);    // <6>


    // Render the color.tsx entry into the same-ID target container in the container HTML:
    const colorBody = colorObj.renderBody({
        body: colorSectionContainer,                                         // <7>
        request
    });
    // Rendering the activating page contributions of color.tsx.
    const colorPageContributions = colorObj.renderPageContributions({
        pageContributions: {                                                 // <8>
            bodyEnd: `<script>console.log('Created: ${colorObj.props.color} thing.');</script>`
        },
        request                                                              // <9>
    });


    // Rendering helloObj's entry into colorBody (which is basically custom-flow-view.html with color.tsx added),
    // using client-side rendering only outside of Content Studio:
    const finalBody = helloObj.renderBody({
        body: colorBody,                                                     // <10>
        ssr: false,                                                          // <11>
        request
    });

    // Adding helloObj's page contributions to the previously rendered page contributions,
    // duplicating ssr between renderPageContributions and renderBody (pair-wise for each entry).
    const finalPageContributions = helloObj.renderPageContributions({
        pageContributions: colorPageContributions,                           // <12>
        // hydrate: false, // Turn off hydration?
        ssr: false,
        request
    });


    // Finally, returning the response object in the standard XP-controller way:
    return {
        body: finalBody,
        pageContributions: finalPageContributions
    }
}
