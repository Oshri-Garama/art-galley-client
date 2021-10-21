import React, { useContext, useEffect } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import { Card, CardContent, CardMedia } from "@mui/material";
// import Chat from "./Chat/Chat";
import { ArtPageContainer, ArtInformationExtended } from "./ArtPage.style";
import isEmpty from "lodash/isEmpty";

const ArtPage = ({ match, history }) => {
  const { getArtById, art, setArt } = useContext(GalleryContext);

  useEffect(() => {
    return () => setArt({});
  }, [setArt]);

  useEffect(() => {
    if (isEmpty(art) && !isEmpty(match.params) && !isEmpty(match.params.id)) {
      getArtById({ artId: match.params.id, history });
    }
  }, [art, match.params, getArtById, history]);

  return (
    !isEmpty(art) && (
      <ArtPageContainer>
        <Card
          id={art.id}
          sx={{
            flexBasis: "50%",
            height: 800,
          }}
        >
          <CardMedia height="550" component="img" image={art.image} />
          <CardContent>
            <ArtInformationExtended>
              <span className="art-name">{art.name}</span>
              <span className="artist-name">By {art.artistName}</span>
              <span className="description">{art.description}</span>
            </ArtInformationExtended>
          </CardContent>
        </Card>
        {/* <Chat art={art} history={history} /> */}
      </ArtPageContainer>
    )
  );
};

export default ArtPage;
