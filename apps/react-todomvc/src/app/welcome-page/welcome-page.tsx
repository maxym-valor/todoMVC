import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcome-page.module.css';

/* eslint-disable-next-line */
export interface WelcomePageProps {}

export function WelcomePage(props: WelcomePageProps) {
  return (
    <div className={styles['container']}>
      <h2>You are on WelcomePage!</h2>
      <Link to="/" className="go_back_btn">
        Go back
      </Link>
    </div>
  );
}

export default WelcomePage;
