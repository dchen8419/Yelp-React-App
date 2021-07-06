import React from 'react';
import styles from './SearchSuggestions.module.css'

export function SearchSuggestions() {
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><button className={styles.suggestion}>Restaurants</button>
            <span className="icon is-small"><i class="fas fa-cocktail"></i></span><button className={styles.suggestion}>Nightlife</button>
            <span className="icon is-small"><i className="fas fa-concierge-bell"></i></span><button className={styles.suggestion}>Services</button>
            <span className="icon is-small"><i className="fas fa-truck"></i></span><button className={styles.suggestion}>Delivery Services</button>
        </div>
    )
}