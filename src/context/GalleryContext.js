import React, {createContext, useState } from 'react';
import susanArt from '../static/images/susan.jpg'
import monaLisa from '../static/images/mona-lisa.jpeg'
import baby from '../static/images/baby.jpeg'
import dog from '../static/images/dog.jpeg'
import tree from '../static/images/tree.jpeg'
import cat from '../static/images/cat.jpeg'
import dogFreeze from '../static/images/dog-freeze.jpeg'
import watermelon from '../static/images/watermelon.jpeg'


export const GalleryContext = createContext();


export const GalleryProvider = (props) => {
    const [arts, setArts] = useState([
        {
            id: 1,
            name: "Susan",
            artistName: "Susan",
            description: "While living in one's body an individual has conjunction with heaven through the angels",
            image: susanArt
        },
        {
            id: 2,
            name: "Mona Lisa",
            artistName: "Leonardo da Vinci",
            description: "The model, Lisa del Giocondo, In French, the title La Joconde has the same meaning.",
            image: monaLisa
        },
        {
            id: 3,
            name: "Surprised baby",
            artistName: "Some father",
            description: "Over the first 5–7 days following birth, the body weight of a term neonate decreases by 3–7%",
            image: baby
        },
        {
            id: 4,
            name: "Pi-tongue",
            artistName: "A random person",
            description: "Dogs have more taste buds on their tongue than cats, but not nearly as many as humans.",
            image: dog
        },
        {
            id: 5,
            name: "Human?",
            artistName: "Nature",
            description: "Seeing faces in trees correlates to creativity, and cognitive scientists are taking interest",
            image: tree
        },
        {
            id: 6,
            name: "Cutie cat",
            artistName: "Katy",
            description: "Cats are common pets throughout the world, and their worldwide population as of 2007 exceeded 500 million.",
            image: cat
        },
        {
            id: 7,
            name: "Red light, Green light",
            artistName: `"Squid game"'s doll`,
            description: "If the red light appear, I will stop moving. The doll is crazy, following the rules that's all I can do so I can survive.",
            image: dogFreeze
        },
        {
            id: 8,
            name: "Watercolor",
            artistName: 'Watercolor',
            description: "Wild watermelon seeds have been found in the prehistoric Libyan site of Uan Muhuggiag. There is also evidence from seeds in Pharaoh tombs of watermelon cultivation in Ancient Egypt.",
            image: watermelon
        }
    ])

    return <GalleryContext.Provider value={{arts}}>
        {props.children}
    </GalleryContext.Provider>
}