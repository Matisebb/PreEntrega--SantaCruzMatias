import './itemDetail.css'
import React from "react";

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail-img" src={data.img} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.descripcion}</p>
                    <p>{data.precio}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;