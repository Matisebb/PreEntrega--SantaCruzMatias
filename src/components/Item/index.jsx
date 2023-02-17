import './item.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className='prod'>
            <img src={info.img} alt="" />
            <p>{info.title}</p>
            <p>{info.descripcion}</p>
            <p>{info.precio}</p>
        </Link>
    );
};

export default Item;



