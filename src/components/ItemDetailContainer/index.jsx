import ItemDetail from "../ItemDetail";

import React, {useState, useEffect} from "react";

const product = {
    id: 1,
    title: "Pizza Napoletana",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/6110TuJw97L._CR0,0,1080,1080_UX256.jpg",
};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;