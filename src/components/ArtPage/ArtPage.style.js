import styled from "styled-components";

export const ArtPageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

export const ArtInformationExtended = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 130px;

  .art-name {
    font-weight: 500;
    font-size: 40px;
  }

  .artist-name {
    color: gray;
    font-size: 15px;
  }

  .description {
    display: -webkit-box;
    padding-top: 5px;
    font-size: 20px;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
