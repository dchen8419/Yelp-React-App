import React from 'react';
import {NavBar} from '../NavBar/NavBar'
import {SubNav} from '../NavBar/SubNav/SubNav'
import { SearchResultSummary } from './SearchResultSummary/SearchResultSummary';
import {SearchResults} from './SearchResults/SearchResults'
import useReactRouter from 'use-react-router'
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';

export function Search() {

    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc') //find in URL string
    const locationParam = params.get('find_loc') //found in URL string 
    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

    if (!term || !locationParam) {
        history.push('/');
    } //Redirect back to homepaage. Checking for truethy and falsy 

    function search(term, location) {
        console.log('I am called')
        performSearch({term, location}); 
    }

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search}/>
            <SubNav/>
            <SearchResultSummary term={searchParams.term} 
                                 location={searchParams.location} 
                                 amountResults={amountResults} 
                                 shownResults={businesses ? businesses.length : 0}/>
            <SearchResults businesses={businesses}/>
        </div>
    )
}