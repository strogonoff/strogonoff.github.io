
/* eslint-disable prefer-template, max-len */

import Helmet from 'react-helmet';

const helmet = Helmet.renderStatic();

export default vo => `

<!DOCTYPE html>
<html lang="en" ${helmet.htmlAttributes.toString()}>

  <head>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    ${helmet.title.toString()}

    <link id="favicon" rel="shortcut icon"
      href="/kyt-favicon.png" sizes="16x16 32x32" type="image/png" />

    ${vo.cssBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.cssBundle + '">' : ''}

    ${helmet.link.toString()}
    ${helmet.meta.toString()}
  </head>

  <body>
    <div id="root"><div>${vo.root}</div></div>
    <script src="${vo.jsBundle}"></script>
  </body>

</html>

`;
