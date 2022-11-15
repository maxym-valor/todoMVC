import React from 'react';
import { Link } from 'react-router-dom';
import styles from './empty-page.module.css';

/* eslint-disable-next-line */
export interface EmptyPageProps {}

export function EmptyPage(props: EmptyPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EmptyPage!</h1>
      <Link to="/" className="go_back_btn">
        Go back
      </Link>
    </div>
  );
}

export default EmptyPage;
