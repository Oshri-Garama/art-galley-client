import React, { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import Art from "../../views/Art/Art";
import { GalleryContainer, EmptyState } from "./Gallery.style";
import isEmpty from "lodash/isEmpty";

const Gallery = () => {
  const { arts } = useContext(GalleryContext);
  return isEmpty(arts) ? (
    <EmptyState key="empty-state">
      There's no arts matched to the search term you provided, Please try again
      or clear the terms to see the full gallery.
    </EmptyState>
  ) : (
    <GalleryContainer className="arts-list">
      {arts.map((art) => (
        <Art key={art.id} art={art} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
