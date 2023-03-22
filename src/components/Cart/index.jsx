import {addDoc, collection, getFirestore} from 'firebase/firestore'
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Matias',
            email: 'Matias@gmail.com',
            phone: '37864107',
            address: 'sargento cabral 2222'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }


    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
            .then(({ id }) => console.log(id))
    }




    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/' className="boton">Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Generar compra</button>
        </>
    )
}

export default Cart;