import React, { useContext } from "react";
import { DataContext } from "../../store/context";
import { MdDelete } from "react-icons/md";

const CartItemsList = () => {
  const { cartState, dispatchCart } = useContext(DataContext);

  const handleDeleteCartItem = (recordId) => {
    dispatchCart({ type: "DELETE_CART_ITEM", payload: recordId });
  };

  return (
    <ul className='cart-items-list'>
      {cartState.items.map(({ record, quantity }) => {
        const { _id, title, artist, img } = record;

        return (
          <li key={_id} className='cart-item'>
            <h3 className='cart-item__title'>
              {title} by {artist}
            </h3>

            <img src={img} alt='thumbnail' className='cart-item__thumbnail' />

            <div className='cart-item__actions'>
              <div className='cart-item__quantity'>{quantity}</div>

              <MdDelete
                className='cart-item__remove'
                onClick={() => handleDeleteCartItem(_id)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartItemsList;

//   const handleUpdateQuantity = (itemId, newQuantity) => {
//     console.log("newQuantity");
//   };

/* 
 <select
                  value={quantity}
                  onChange={(e) => handleUpdateQuantity(_id, e.target.value)}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>

*/
