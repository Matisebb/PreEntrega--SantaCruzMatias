import './item.css';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
// import { CartContext } from '../../context/CartContext';

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className='prod'>
            <img src={info.img} alt="" />
            <p>{info.title}</p>
            <p>{info.descripcion}</p>
            <p>{info.price}</p>
        </Link>
    );
};

export default Item;



