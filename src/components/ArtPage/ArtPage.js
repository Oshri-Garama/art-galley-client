import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../../context/GalleryContext";

const ArtPage = ({ location }) => {
  const { arts } = useContext(GalleryContext);
  const { id } = useParams();
  console.log(arts);
  return <div>TEST</div>;
};

export default ArtPage;
