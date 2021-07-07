import React from 'react';
import {TopNav} from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import {SearchSuggestions} from './SearchSuggestions/SearchSuggestions';
import useReactRouter from 'use-react-router';






export function LandingPage() {

    const {history} = useReactRouter()

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term)   //make sure there are not problems with spaces
        const urlEncodedLocation = encodeURI(location); 
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`) //URL pattern from Yelp
    }

    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav/>
                <button className={styles.logo}><img src={logo} className={styles.logo} alt='logo'/></button>
                <SearchBar search={search}/>
                <SearchSuggestions/>
            </div>
        </div>
    )
}