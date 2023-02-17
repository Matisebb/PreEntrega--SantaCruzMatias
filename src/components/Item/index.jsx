import './item.css';
import React from 'react';

const Item = ({info}) => {
    return (
        <a href='' className='prod'>
            <img src={info.img} alt="" />
        <p>{info.title}</p>
        <p>{info.descripcion}</p>
        <p>{info.precio}</p>
        </a>
    );
};

export default Item;






