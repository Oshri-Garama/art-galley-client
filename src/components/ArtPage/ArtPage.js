import React, { useContext, useEffect, useState, useRef } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import { Card, CardContent, CardMedia } from "@mui/material";
import Chat from "./Chat/Chat";
import { ArtPageContainer, ArtInformationExtended } from "./ArtPage.style";
import isEmpty from "lodash/isEmpty";
import StyledTooltip from "../StyledTooltip/StyledTooltip";

const ArtPage = ({ match, history }) => {
  const { getArtById, art, setArt } = useContext(GalleryContext);
  const imageRef = useRef(null);
  const [imageInformation, setImageInformation] = useState("");

  useEffect(() => {
    return () => setArt({});
  }, []);

  useEffect(() => {
    const fetchArt = async () => {
      if (isEmpty(art) && !isEmpty(match.params) && !isEmpty(match.params.id)) {
        await getArtById({ artId: match.params.id, history });
      }
    };

    fetchArt();

    if (!isEmpty(imageRef.current)) {
      const { clientWidth, clientHeight } = imageRef.current;
      setImageInformation(
        `The dimensions of the image are now: ${clientWidth}X${clientHeight}`
      );
    }
  }, [imageRef, art, match.params, history]);

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
          <StyledTooltip title={imageInformation}>
            <CardMedia
              ref={imageRef}
              height="550"
              component="img"
              image={art.image_url}
            />
          </StyledTooltip>
          <CardContent>
            <ArtInformationExtended>
              <span className="art-name">{art.name}</span>
              <span className="artist-name">By {art.artist_name}</span>
              <StyledTooltip title={art.description}>
                <span className="description">{art.description}</span>
              </StyledTooltip>
            </ArtInformationExtended>
          </CardContent>
        </Card>
        <Chat art={art} history={history} />
      </ArtPageContainer>
    )
  );
};

export default ArtPage;
