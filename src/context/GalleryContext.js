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
  const [arts, setArts] = useState([]);
  const [art, setArt] = useState({});

  const filterGallery = async ({ searchTerm }) => {
    // Undo filtering
    if (isEmpty(searchTerm)) return setArts(await galleryService.getAll());

    const filteredArts = filter(arts, (art) => {
      const { name, artistName } = art;
      return isArtMatchToFilter({
        searchTerm,
        values: { name, artistName },
      });
    });

    setArts(filteredArts);
  };

  const getArtById = async ({ artId, history }) => {
    const art = await galleryService.getArtById({ artId });
    if (isEmpty(art)) {
      history.replace("/");
    }

    setArt(art);
  };

  const getAllArts = async () => {
    const galleryArts = await galleryService.getAll();
    setArts(galleryArts);
  };

  return (
    <GalleryContext.Provider
      value={{ arts, filterGallery, getAllArts, getArtById, art, setArt }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
