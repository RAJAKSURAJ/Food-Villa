import { useDispatch, useSelector } from "react-redux";
import CartItem from "./utils/cartItem";
import AppHeader from "../HeaderComponent";
import { clearCart } from "./utils/cartSlice";
import Footer from "../Footer";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItem", cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <AppHeader />
      <div className="text-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          {cartItems.length === 0 ? (
            <h1>Cart is empty. Add Items to the cart</h1>
          ) : (
            <button
              className="p-2 m-2 bg-black text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
          {/* <ItemCards item={cartItems} /> */}
          <CartItem item={cartItems} />
        </div>
      </div>
    </>
  );
};
export default Cart;
