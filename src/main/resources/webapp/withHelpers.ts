import {getClientUrl} from '/lib/enonic/react4xp';
// @ts-expect-error No types for '/lib/thymeleaf' yet.
import thymeleaf from '/lib/thymeleaf';


const VIEW = resolve('withHelpers.html');
const PROJECT = 'default';
const BRANCH = 'master';
const SITE_NAME = 'webapp';


export function get(req) {
  const clientUrl = getClientUrl();

  const model = {
    clientAssetHtml: `<script src="${clientUrl}"></script>`,
    BRANCH,
    movieType: `${app.name}:movie`,
    PROJECT,
    SITE_NAME
  };

  return {
    contentType: 'text/html',
    body: thymeleaf.render(VIEW, model)
  };
}
