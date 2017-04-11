import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

export default function HTML(props) {
  const { body } = props;
  const head = Helmet.rewind()

  let path = ''

  if (props.location && props.location.pathname) {
    path = props.location.pathname
  }

  let css
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
  }

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {head.title.toComponent()}

        <meta name="robots" context="index, follow" />
        <meta name="author" content="Anton Strogonoff" />

        <meta property="og:url" content={`http://anton.strogonoff.name${path}`} />
        <meta property="og:site_name" content="Anton Strogonoff" />

        {head.meta.toComponent()}

        {css}

      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  body: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}
