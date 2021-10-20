import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';


const Search = () => {
    const { arts } = useContext(GalleryContext);
    return (
        <div>Search</div>
    )
};

export default Search;