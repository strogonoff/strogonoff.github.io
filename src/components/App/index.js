
import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import styles from './styles.scss';

function App({ children }) {
  return (
    <div>

      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.link} to="/tools">Tools</Link>
          </li>
        </ul>
      </nav>

      <main className={`${styles.content}`}>
        {children}
      </main>

    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;