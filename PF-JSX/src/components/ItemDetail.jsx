import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-center">
                    <img src={item.imagen} alt={item.Nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.Nombre}</h1>
                    <p>{item.Descripcion}</p>
                    <p><b>${item.Precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;