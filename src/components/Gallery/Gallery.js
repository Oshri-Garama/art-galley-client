import React, { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import Art from "../../views/Art/Art";
import { GalleryContainer, EmptyState, LoadingWrapper } from "./Gallery.style";
import isEmpty from "lodash/isEmpty";
import { CircularProgress } from "@mui/material";

const Gallery = () => {
  const { arts, getAllArts } = useContext(GalleryContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArts = async () => {
      await getAllArts();
      setIsLoading(false);
    };

    fetchArts();
  }, []);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <CircularProgress />
      </LoadingWrapper>
    );
  }

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
