import React, { createContext, useState } from "react";
import susanArt from "../static/images/susan.jpg";
import monaLisa from "../static/images/mona-lisa.jpeg";
import baby from "../static/images/baby.jpeg";
import dog from "../static/images/dog.jpeg";
import tree from "../static/images/tree.jpeg";
import cat from "../static/images/cat.jpeg";
import dogFreeze from "../static/images/dog-freeze.jpeg";
import watermelon from "../static/images/watermelon.jpeg";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import filter from "lodash/filter";

export const GalleryContext = createContext();

const artGallery = [
  {
    id: "be27589d-253f-4c98-aefa-a1e1e363e15c",
    name: "Susan",
    artistName: "Susan",
    description:
      "While living in one's body an individual has conjunction with heaven through the angels",
    image: susanArt,
  },
  {
    id: "69420241-f192-466c-b32d-84af1eb86926",
    name: "Mona Lisa",
    artistName: "Leonardo da Vinci",
    description:
      "The model, Lisa del Giocondo, In French, the title La Joconde has the same meaning.",
    image: monaLisa,
  },
  {
    id: "43459127-caf6-48a9-b589-d74e0f7aa921",
    name: "Surprised baby",
    artistName: "Some father",
    description:
      "Over the first 5–7 days following birth, the body weight of a term neonate decreases by 3–7%",
    image: baby,
  },
  {
    id: "91753dc5-160e-4713-8b7f-af0e34ff3a76",
    name: "Pi-tongue",
    artistName: "A random person",
    description:
      "Dogs have more taste buds on their tongue than cats, but not nearly as many as humans.",
    image: dog,
  },
  {
    id: "1e2a8870-f1fc-4477-8989-6f5d939d38c0",
    name: "Human?",
    artistName: "Nature",
    description:
      "Seeing faces in trees correlates to creativity, and cognitive scientists are taking interest",
    image: tree,
  },
  {
    id: "d5c3d054-749b-41f4-b9a5-c40a27b5e299",
    name: "Cutie cat",
    artistName: "Katy",
    description:
      "Cats are common pets throughout the world, and their worldwide population as of 2007 exceeded 500 million.",
    image: cat,
  },
  {
    id: "042d176b-c358-4062-84a1-e4455914a85f",
    name: "Red light, Green light",
    artistName: `"Squid game"'s doll`,
    description:
      "If the red light appear, I will stop moving. The doll is crazy, following the rules that's all I can do so I can survive.",
    image: dogFreeze,
  },
  {
    id: "70a7dac9-c417-4ccd-b8c4-59e9be2dd4d2",
    name: "Watercolor",
    artistName: "Watercolor",
    description:
      "Wild watermelon seeds have been found in the prehistoric Libyan site of Uan Muhuggiag. There is also evidence from seeds in Pharaoh tombs of watermelon cultivation in Ancient Egypt.",
    image: watermelon,
  },
];

const isArtMatchToFilter = ({ searchTerm, values }) => {
  const searchTermFormatted = searchTerm.toLowerCase();

  return find(values, (value) =>
    value.toLowerCase().includes(searchTermFormatted)
  );
};

export const GalleryProvider = (props) => {
  const [arts, setArts] = useState(artGallery);
  const [art, setArt] = useState({});

  const filterGallery = ({ searchTerm }) => {
    // Undo filtering
    if (isEmpty(searchTerm)) return setArts(artGallery);

    const filteredArts = filter(arts, (art) => {
      const { name, artistName } = art;
      return isArtMatchToFilter({
        searchTerm,
        values: { name, artistName },
      });
    });

    setArts(filteredArts);
  };

  const getArtById = ({ artId, history }) => {
    //TODO: Should be fetched from the backend.
    const art = find(artGallery, { id: artId });
    if (isEmpty(art)) {
      history.replace("/");
    }

    setArt(art);
  };

  return (
    <GalleryContext.Provider value={{ arts, filterGallery, getArtById, art }}>
      {props.children}
    </GalleryContext.Provider>
  );
};
