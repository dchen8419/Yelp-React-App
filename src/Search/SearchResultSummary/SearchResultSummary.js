import React from 'react';
import styles from './SearchResultSummary.module.css'

export function SearchResultSummary (props) {
    let resultStats= null;
    if (props.amountResults && props.shownResults) {
        resultStats = <p> Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    }
    let ratings = [];
    for (let i = 1; i < 5; i +=1) {
        ratings.push(
            <button className='button'>{'$'.repeat(i)}</button>
        )
    }
   
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>{props.location}:  </strong>{props.term}</h1>
                {resultStats}
            </div>
            <div className={styles.filters}>
                <button className="button">
                    <span className="icon">
                    <i className="fas fa-sliders-h"></i>
                    </span>
                    <span>All Filters</span>
                </button>
                <div className="buttons has-addons">
                   {ratings}
                </div>
                <button className="button">
                    <span className="icon">
                    <i className="fas fa-clock"></i>
                    </span>
                    <span>Open Now</span>
                </button>
                <button className="button">
                    <span className="icon">
                    <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span>Cashback</span>
                </button>
            </div>
        </div>
    )
}