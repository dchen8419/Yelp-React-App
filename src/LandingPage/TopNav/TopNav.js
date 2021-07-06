import React from 'react';
import styles from './TopNav.module.css';

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <button>Write a Review</button>
                <button>Events</button>
            </div>
            <div className={styles.right}>
                <span>Login</span>
                <button classname='button'>Sign Up</button>
            </div>
        </div>
    )
}