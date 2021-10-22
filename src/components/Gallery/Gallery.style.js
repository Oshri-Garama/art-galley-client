import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const EmptyState = styled.h3`
  display: flex;
  align-items: center;
  height: 250px;
  font-weight: 300;
  color: rgba(255, 50, 85, 1);
  white-space: pre-wrap;
  justify-content: center;
`;

export const LoadingWrapper = styled.h3`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
