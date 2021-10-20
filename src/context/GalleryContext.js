import React, {createContext, useState } from 'react';

export const GalleryContext = createContext();


export const GalleryProvider = (props) => {
    const [arts, setArts] = useState([
        {
            id: 1,
            name: "Art number one",
            description: "TEST",
            image_url: ""
        },
        {
            id: 2,
            name: "Art number 2",
            description: "TEST",
            image_url: ""
        },
        {
            id: 3,
            name: "Art number 3",
            description: "TEST",
            image_url: ""
        },
        {
            id: 4,
            name: "Art number four",
            description: "TEST",
            image_url: ""
        },
        {
            id: 5,
            name: "Art number 5",
            description: "TEST",
            image_url: ""
        },
        {
            id: 6,
            name: "Art number 6",
            description: "TEST",
            image_url: ""
        }
    ])

    return <GalleryContext.Provider value={{arts}}>
        {props.children}
    </GalleryContext.Provider>
}