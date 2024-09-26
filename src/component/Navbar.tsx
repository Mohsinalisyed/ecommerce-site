import { Box, CartIcon, Flex } from "../utlis"
import Button from "../utlis/ui_components/Button"

const Navbar = () => {
  return (
    <Flex justifyContent="end" style={{ margin: "0px 40px 0px 38px" }}>
      <Button
        bg="#ffffff"
        width="156px"
        height="56px"
        radius="99px"
        color="#09090A"
        margin="24px 0"
        padding="16px"
        borderColor="#ffffff"
      >
       <CartIcon/> <Box style={{paddingLeft:"8px"}}>My Cart</Box>
      </Button>
    </Flex>
  )
}

export default Navbar