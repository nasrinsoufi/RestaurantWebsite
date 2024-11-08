import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useCartContext } from "../../Contexts/context";

const CartItem = ({ id, imageUrl,price,name }) => {
  const { remove } = useCartContext();
  return (
    <div className="d-flex justify-content-between align-items-center mt-3" >
      <div className="d-block d-sm-flex align-items-center text-center text-sm-end">
        <img src={imageUrl} width="120" className="ms-3 rounded" alt="Pizza" />

        <div>
          <h3 className="product-title fs-base mb-2">
            <p>{name}</p>
          </h3>
          <div className="fs-lg text-accent pt-2">{price} تومان</div>
        </div>
      </div>
      <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end">
       
        <button
          className="btn btn-link text-danger pe-0"
          type="button"
          onClick={() => remove(id)}
        >
          <RiCloseCircleLine className="ms-1" />
          <span className="fs-sm">حذف</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
