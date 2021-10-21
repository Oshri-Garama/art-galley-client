import React, { useContext, useEffect } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import { Card, CardContent, CardMedia } from "@mui/material";
import { ArtPageContainer, ArtInformationExtended } from "./ArtPage.style";
import isEmpty from "lodash/isEmpty";

const ArtPage = ({ match, history }) => {
  const { getArtById, art } = useContext(GalleryContext);
  useEffect(() => {
    if (!isEmpty(match.params) && !isEmpty(match.params.id)) {
      getArtById({ artId: match.params.id, history });
    }
  }, [match.params.id]);

  return (
    !isEmpty(art) && (
      <ArtPageContainer>
        <Card id={art.id} sx={{ flexBasis: "45%", height: 800 }}>
          <CardMedia height="500" component="img" image={art.image} />
          <CardContent>
            <ArtInformationExtended>
              <span className="art-name">{art.name}</span>
              <span className="artist-name">By {art.artistName}</span>
              <span className="description">{art.description}</span>
            </ArtInformationExtended>
          </CardContent>
        </Card>
      </ArtPageContainer>
    )
  );
};

export default ArtPage;
