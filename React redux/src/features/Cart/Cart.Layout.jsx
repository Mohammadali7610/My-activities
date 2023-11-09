import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "./Cart.Slice";
import meme from "../../assets/meme.jpeg";

const MyCart = () => {
  const cartList = useSelector((state) => state.myCart.data);
  const dispatch = useDispatch();

  const onRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
    
  const onUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  const handleIncrease = (productId, currentQuantity) => {
    onUpdateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrease = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      onUpdateQuantity(productId, currentQuantity - 1);
    }
  };

  return (
    <div>
      <h1> Carts</h1>
      {cartList.length > 0 ? (
        cartList.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "4px",
                border: "1px solid silver",
                padding: "4px",
                borderRadius: "6px",
                alignItems: "center",
              }}
              key={item.id}
            >
              <div style={{
                display: "flex",
                flexDirection:"column"
              }}>
              <img src={item.image} width={60} />
              <p style={{ fontSize: "18px",margin:"0px" }}>
                {item.title} 
              </p>
              <p style={{ fontSize: "16px",margin:"0px" }}>
                <strong>Price:</strong>{item.price}$
              </p>
              <div style={{marginBottom:"2px"}}>
                  <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
                </div>
              <div>
                <button onClick={() => onRemoveFromCart(item)}>
                  Remove Item
                </button>
              </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <img src={meme} width={250} alt="kuch bhi" />
        </div>
      )}
    </div>
  );
};

export default MyCart;
