import React from 'react';
import styles from './SearchResult.module.css'
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult (props) {
    const b = props.business
    let phone = b.phone
    if(!b) {
        return <div></div>
    }

    function formatPhoneNumber(phone) {
        var cleaned = ('' + phone).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          var intlCode = (match[1] ? '+1 ' : '');
          return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
      }

    const tags = b.categories.map(catagory => (<span className={`tag ${styles['business-tag']}`} key={b.id + catagory.title}>{catagory.title}</span>))
    const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>)   

    return (
        <div className={styles['search-result']}>
            <img src={b.image_url} alt='business' className={styles['business-image']}/>
            <div className={styles['business-info']}>
                <h2 className="subtitle">{b.name}</h2>
                <BusinessRating reviewCount={b.review_count} rating={b.rating}/>
                <p>{b.price} {tags}</p>
            </div>
            <div className={styles['contact-info']}>
                <p>{formatPhoneNumber(phone)}</p>
                {addressLines}
            </div>
            
        </div>
    )
}