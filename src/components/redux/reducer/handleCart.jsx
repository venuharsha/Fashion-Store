// import { useEffect } from "react";
// const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

const cart = [];

const handleCart = (state = cart, action) => {

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart]);
  
  const product = action.payload;

  switch (action.type) {
    case "ADDCART":
      //check if product is already present
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELCART":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "REMOVECART":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2) {
        return state.filter((x) => x.id !== product.id)
      }
    break;

    default:
      return state;
  }
};

export default handleCart;
