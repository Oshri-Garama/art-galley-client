import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import Art from '../../views/Art/Art';
import {GalleryContainer} from './Gallery.style'

const Gallery = () => {
    const { arts } = useContext(GalleryContext);
    return (
        <GalleryContainer className='arts-list'>
            {arts.map(art => <Art id={art.id} art={art}/>)}
        </GalleryContainer>
    )
}

export default Gallery;