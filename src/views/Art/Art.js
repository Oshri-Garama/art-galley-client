import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { ArtInformation, StyledLink } from "./Art.style";
import isEmpty from "lodash/isEmpty";
import StyledTooltip from "../../components/StyledTooltip/StyledTooltip";

const Art = ({ art }) => {
  const imageRef = useRef("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");

  useEffect(() => {
    if (!isEmpty(imageRef) && !isEmpty(imageRef.current)) {
      const { naturalHeight, naturalWidth } = imageRef.current;
      setImageWidth(naturalWidth);
      setImageHeight(naturalHeight);
    }
  }, [imageRef, setImageHeight, setImageWidth]);

  return (
    <Card id={art.id} sx={{ flexBasis: "20%", margin: 2, height: 380 }}>
      <StyledLink to={`/art/${art.id}`}>
        <StyledTooltip title={`${imageWidth}X${imageHeight}`}>
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
              <span className="description">{art.description}</span>
            </StyledTooltip>
          </ArtInformation>
        </CardContent>
      </StyledLink>
    </Card>
  );
};

export default Art;
