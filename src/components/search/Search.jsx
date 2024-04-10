import React from 'react'
import InnerWrapper from '../ui/InnerWrapper';

import "@styles/search/_search.scss";
import SearchInput from './SearchInput';

const Search = () => {
  return (
    <section className='search'>
        <div className="container">
            <InnerWrapper>
                <SearchInput/>
            </InnerWrapper>
        </div>
        <div className="opacity-layer"></div>
    </section>
  )
}

export default Search