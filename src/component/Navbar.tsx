import { useNavigate } from "react-router-dom"
import { Box, CartIcon, Flex } from "../utlis"
import Button from "../utlis/ui_components/Button"

const Navbar = () => {
  const navigate =useNavigate()
  return (
    <Flex justifyContent="end">
      <Button
        bg="#ffffff"
        width="156px"
        height="56px"
        radius="99px"
        color="#09090A"
        margin="24px 0"
        padding="16px"
        borderColor="#ffffff"
        onClick={()=>navigate('/dashboard/cart')}
      >
       <CartIcon/> <Box style={{paddingLeft:"8px"}}>My Cart</Box>
      </Button>
    </Flex>
  )
}

export default Navbar