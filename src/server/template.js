
/* eslint-disable prefer-template, max-len */

import Helmet from 'react-helmet';

export default vo => {
  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>

      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        ${helmet.title.toString()}

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
};