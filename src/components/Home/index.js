
import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.scss';

function Home() {
  return (
    <section>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Anton Strogonoff</title>
      </Helmet>

      <p className={`tk-grad ${styles.bigParagraph}`}>
        Simpler is better.
      </p>

      <p className={styles.paragraph}>
        Check out the Tools section for an outline of the libraries that
        are used in this Starter-kyt.
      </p>

    </section>
  );
}

export default Home;
