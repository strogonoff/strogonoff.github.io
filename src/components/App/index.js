
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';
import Helmet from 'react-helmet';


const serviceDesc = "Web development";
const avatar = (size) => `/avatar${size}.png`;


function App({ children }) {
  return (
    <div>

      <Helmet
        defaultTitle="Anton Strogonoff"
        titleTemplate="%s — Anton Strogonoff">

        <html
          lang="en"
          itemscope
          itemtype="http://schema.org/Service"
        />

        <meta
          name="description"
          content={serviceDesc} />
        <meta
          itemprop="description"
          content={serviceDesc} />
        <meta
          itemprop="image"
          content={avatar(512)} />

        <link
          id="favicon"
          rel="shortcut icon"
          type="image/png"
          sizes="16x16 32x32"
          href={avatar(32)}
        />

      </Helmet>

      <main className={`${styles.content}`}>
        <p className={`tk-grad ${styles.bigParagraph}`}>
          Web development
          Web design
          Mobile friendly
          Mobile native*
          Architecture, <abbr>MVP</abbr>
        </p>

        <section>
          Let’s talk and see what I can do for your business
          —
          <button>
            Discuss Work
          </button>
        </section>

        <section>
          My generic rate is $50/hr
          —
          <button>
            Hire me
          </button>
        </section>

        <p>
          Charity project on 13th day of every month.
        </p>

        <div>
          {children}
        </div>
      </main>

    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
