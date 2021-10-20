import React, { useContext } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import { TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const Search = () => {
  const { filterGallery } = useContext(GalleryContext);
  return (
    <TextField
      fullWidth
      id="gallery-search"
      variant="outlined"
      placeholder="Filter arts..."
      onChange={(e) => filterGallery({ searchTerm: e.target.value })}
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchOutlined />
          </IconButton>
        ),
      }}
    />
  );
};

export default Search;
