import {
  // getAssetUrls
  getComponentChunkUrls
} from '/lib/enonic/react4xp';
import thymeleaf from '/lib/thymeleaf';
import {
  assetUrl as getAssetUrl,
  serviceUrl as getServiceUrl
} from '/lib/xp/portal';


const VIEW = resolve('standalone.html');
const PROJECT = 'default';
const BRANCH = 'master';
const SITE_NAME = 'webapp';
const SITE_ROOT = `/site/${PROJECT}/${BRANCH}/${SITE_NAME}`;


export function get() {
  const assetUrls = getComponentChunkUrls('MovieList');

  const assetsArray = [];
  for (let i = 0; i < assetUrls.length; i++) {
    const assetUrl = assetUrls[i];
    const ext = assetUrl.split('.').pop();
    if (ext === 'css') {
      assetsArray.push(`<link rel="stylesheet" type="text/css" href="${assetUrl}" />`);
    } else if (ext === 'js') {
      assetsArray.push(`<script src="${assetUrl}"></script>`);
    }
  }

  return {
    contentType: 'text/html',
    body: thymeleaf.render(VIEW, {
      apiUrl: `${SITE_ROOT}/api/headless`,
      APP_NAME: app.name,
      assetRoot: getAssetUrl({path: ''}),
      assetsHtml: assetsArray.join('\n'),
      serviceRoot: getServiceUrl({service: ''}),
      SITE_NAME
    })
  };
}
