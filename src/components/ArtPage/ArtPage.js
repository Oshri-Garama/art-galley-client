import React from "react";
import { useParams } from "react-router-dom";

const ArtPage = ({ location }) => {
  const { id } = useParams();

  return <div>TEST</div>;
};

export default ArtPage;
