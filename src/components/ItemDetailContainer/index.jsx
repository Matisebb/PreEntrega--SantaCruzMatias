import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const products = [
    {
        id: 1,
        title: "Pizza Napoletana",
        img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/6110TuJw97L._CR0,0,1080,1080_UX256.jpg",
        descripcion: "Queso Mozzarella, salsa de tomate con pimienta y oregano, tomate natural, anchoas, alcaparras y aceite de oliva",
        category: 'pizzas',
        price: 1500
    },
    {
        id: 2,
        title: "Pizza Margherita",
        img: "https://hungerstation.com/_next/image?url=https%3A%2F%2Fhsaa.hsobjects.com%2Fh%2Fmenuitems%2Fimages%2F015%2F767%2F259%2Fb6b54c788e6a72ce66fb9a85ce65a949-size1200.jpg&w=256&q=75",
        descripcion: "Queso Mozzarella di Buffala, salsa pomodoro 100% natural y albahaca. Masa pizza italiana artesanal",
        category: 'pizzas',
        price: 1900
    },
    {
        id: 3,
        title: "Pizza Pepperoni",
        img: "https://images.rappi.pe/products/3afc7931-c040-408a-bf19-1f6e008ba361.png?d=128x128&e=webp&q=70",
        descripcion: "Queso Mozzarella rallado, pepperoni y oregano seco",
        category: 'pizzas',
        price: 2100

    },
    {
        id: 4,
        title: "Cheeseburger & extra Bacon",
        img: "https://www.toque.com.ar/sistema/uploads/571/articulos/660826668493.jpeg",
        descripcion: "Hamburguesa con queso cheddar y 4 fetas de bacon",
        category: 'hamburguesas',
        price: 1100
    },
    {
        id: 5,
        title: "Crispy onion Burger",
        img: "https://i.pinimg.com/600x315/d6/03/53/d603531f3f54b9ab151295bac026b83c.jpg",
        descripcion: "Hamburguesa con cebolla crispy",
        category: 'hamburguesas',
        price: 1100
    }
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getData.then(res => setData(res.find(pizza => pizza.id === parseInt(detalleId))));
    }, []);

    return (
        <ItemDetail data={data} />
    );
};

export default ItemDetailContainer;