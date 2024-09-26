import React from "react"
import Navbar from "../component/Navbar"
import { BannerWrapper, CardWrapper, HomeWrapper } from "../component"
import { Img, products } from "../utlis"
import LeftBannerImage from '../assets/LeftBannerImage.png'
import RightBannerImage from '../assets/RightBannerImage.png'
import ProductCard from "../component/Card"
const Home = () => {
  return (
    <React.Fragment>
      <HomeWrapper>
        <Navbar />
        <BannerWrapper>
          <Img src={LeftBannerImage} alt="LeftBannerImage" width={'70%'}/>
          <Img src={RightBannerImage} alt="LeftBannerImage" width={'30%'} />
        </BannerWrapper>
        <CardWrapper>
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageSrc={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </CardWrapper>
      </HomeWrapper>
    </React.Fragment>
  )
}

export default Home