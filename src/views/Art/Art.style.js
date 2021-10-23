import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArtInformation = styled.div`
  display: flex;
  flex-direction: column;

  .art-name {
    font-weight: 500;
    font-size: 20px;
  }

  .artist-name {
    color: gray;
    font-size: 16px;
  }

  .description {
    display: -webkit-box;
    font-size: 14px;
    margin-top: 5px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

/**
 * Undecorated link uses to warp the art's Card,
 * the decoration is the content of the card.
 */
export const UndecoratedLink = styled(Link)`
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
