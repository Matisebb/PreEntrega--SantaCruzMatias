import './itemDetail.css';
import ItemCount from "../ItemCount";
import React, {useState} from "react";
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail-img" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.descripcion}</p>
                    <p>{data.precio}</p>
                    {
                        goToCart
                        ? <Link to='/cart'>Finalizar compra</Link>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;