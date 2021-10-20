import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { ArtInformation, StyledLink } from "./Art.style";
import ArtPage from "../../components/ArtPage/ArtPage";

const Art = ({ art }) => {
  return (
    <Card
      id={art.id}
      sx={{ flexBasis: "20%", margin: 2, width: 200, height: 380 }}
    >
      <StyledLink to={`/art/${art.id}`} state={{ id: art.id }}>
        <CardMedia height="250" component="img" image={art.image} />
        <CardContent>
          <ArtInformation>
            <span className="art-name">{art.name}</span>
            <span className="artist-name">By {art.artistName}</span>
            <span className="description">{art.description}</span>
          </ArtInformation>
        </CardContent>
      </StyledLink>
    </Card>
  );
};

export default Art;
