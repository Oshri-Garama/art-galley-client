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
    padding-top: 5px;
    font-size: 14px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
