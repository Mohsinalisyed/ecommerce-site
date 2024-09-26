import { HomeWrapper } from "../component"
import AddToCart from "../component/AddToCart"
import Payment from "../component/Payment"
import { Box } from "../utlis"
import { CartWrapper } from "./style"

const MyCart = () => {
  return (
    <HomeWrapper>
    <CartWrapper>
      <Box style={{width:"100%"}}>
          <AddToCart />
      </Box>
      <Payment/>
    </CartWrapper>
    </HomeWrapper>
  )
}

export default MyCart