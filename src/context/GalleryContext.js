import React, { createContext, useState } from "react";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import filter from "lodash/filter";
import galleryService from "../services/gallery";

export const GalleryContext = createContext();

const isArtMatchToFilter = ({ searchTerm, values }) => {
  const searchTermFormatted = searchTerm.toLowerCase();

  return find(values, (value) =>
    value.toLowerCase().includes(searchTermFormatted)
  );
};

export const GalleryProvider = ({ children }) => {
  const [unfilteredArts, setUnfilteredArts] = useState([]);
  const [arts, setArts] = useState([]);
  const [art, setArt] = useState({});

  const filterGallery = async ({ searchTerm }) => {
    // Undo filtering
    if (isEmpty(searchTerm)) return setArts(unfilteredArts);

    const filteredArts = filter(unfilteredArts, (art) => {
      const { name, artist_name } = art;
      return isArtMatchToFilter({
        searchTerm,
        values: { name, artist_name },
      });
    });

    setArts(filteredArts);
  };

  const getArtById = async ({ artId, history }) => {
    const art = await galleryService.getArtById({ artId });
    if (isEmpty(art)) {
      return history.replace("/");
    }

    setArt(art);
  };

  const getAllArts = async () => {
    const galleryArts = await galleryService.getAll();
    setArts(galleryArts);
    setUnfilteredArts(galleryArts);
  };

  return (
    <GalleryContext.Provider
      value={{ arts, filterGallery, getAllArts, getArtById, art, setArt }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
