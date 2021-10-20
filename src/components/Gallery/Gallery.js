import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';


const Gallery = () => {
    const { arts } = useContext(GalleryContext);
    return (
        <div className='arts-list'>
            {arts.map(art => (
            <div className='single-art'>
             <span>{art.name}</span>
             <span>{art.description}</span>
            </div>
            ))}
        </div>
    )
}

export default Gallery;