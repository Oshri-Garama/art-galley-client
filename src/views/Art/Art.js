import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { ArtInformation, UndecoratedLink } from "./Art.style";
import isEmpty from "lodash/isEmpty";
import StyledTooltip from "../../components/StyledTooltip/StyledTooltip";

const Art = ({ art }) => {
  const imageRef = useRef(null);
  const [imageInformation, setImageInformation] = useState("");

  useEffect(() => {
    if (!isEmpty(imageRef.current)) {
      const { clientWidth, clientHeight } = imageRef.current;
      setImageInformation(
        `The dimensions of the image are currently: ${clientWidth}X${clientHeight}`
      );
    }
  }, [imageRef]);

  return (
    <Card id={art.id} sx={{ flexBasis: "20%", margin: 2, height: 380 }}>
      <UndecoratedLink to={`/art/${art.id}`}>
        <StyledTooltip title={imageInformation}>
          <CardMedia
            ref={imageRef}
            height="250"
            component="img"
            image={art.image_url}
          />
        </StyledTooltip>
        <CardContent>
          <ArtInformation>
            <span className="art-name">{art.name}</span>
            <span className="artist-name">By {art.artist_name}</span>
            <StyledTooltip title={art.description}>
              <p className="description">{art.description}</p>
            </StyledTooltip>
          </ArtInformation>
        </CardContent>
      </UndecoratedLink>
    </Card>
  );
};

export default Art;
