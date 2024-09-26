import { useSelector } from 'react-redux';
import { RootState } from '../store/index'; // Ensure this path is correct
import { HomeWrapper } from "../component";
import CartItem from "../component/CartItem";
import Payment from "../component/Payment";
import { Box } from "../utlis";
import { CartWrapper } from "./style";
export interface ICartItem {
  id: number;
  quantity: number;
  name: string;
  price: string;
  image: string;
}

const MyCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <HomeWrapper>
      <CartWrapper>
        <Box style={{ width: "100%" }}>
          {cartItems.map((item: ICartItem) => (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </Box>
        <Payment />
      </CartWrapper>
    </HomeWrapper>
  );
}

export default MyCart;
