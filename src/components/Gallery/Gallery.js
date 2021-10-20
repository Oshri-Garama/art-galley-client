import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';


const Gallery = () => {
    const { arts } = useContext(GalleryContext);
    return (
        <div>This is the gallery container</div>
    )
}

export default Gallery;