import React, { useContext, useEffect } from "react";
import { GalleryContext } from "../../context/GalleryContext";
import {
  IconButton,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Send, ArrowBack } from "@material-ui/icons";
import {
  ArtPageContainer,
  ArtInformationExtended,
  ChatWrapper,
} from "./ArtPage.style";
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
        <Card
          id={art.id}
          sx={{
            marginLeft: 1,
            boxShadow:
              "0px 2px 1px -1px yellow, 0px 1px 1px 0px red, 0px 1px 3px 0px blue",
            flexBasis: "40%",
            height: 800,
          }}
        >
          <ChatWrapper>
            <CardContent className="chat-content">
              <IconButton
                onClick={() => history.replace("/")}
                className="back-button"
                color="primary"
              >
                <ArrowBack />
              </IconButton>
              ** ChatWrapper + Chat component here **
              <div>Me: Test</div>
              <div>You: Test</div>
            </CardContent>
            <CardActions className="card-actions">
              <Button
                endIcon={<Send />}
                variant="contained"
                size="small"
                color="primary"
              >
                Send
              </Button>
            </CardActions>
          </ChatWrapper>
        </Card>
      </ArtPageContainer>
    )
  );
};

export default ArtPage;
