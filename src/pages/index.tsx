import { Footer, HomeContainer ,Name,Price,Product} from "@/styles/pages/home";
import Image from "next/image";
import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import TshirtLogo from "@/assets/IgniteTshirt.png"
export default function Home() {
  const [sliderRef] = useKeenSlider(({
    slides: {
      perView: 3,
      spacing: 48
    }
  }))
  return (
     <HomeContainer ref={sliderRef} className="keen-slider">
       <Product className="keen-slider__slide">
        <Image  src={TshirtLogo} width={400} height={400} alt="shirt"/>

        <Footer>
          <Name>Camiseta X</Name>
          <Price>R$ 19,99</Price>
        </Footer>
       </Product>
       <Product className="keen-slider__slide">
        <Image  src={TshirtLogo} width={400} height={400} alt="shirt"/>
       </Product>
       <Product className="keen-slider__slide">
        <Image  src={TshirtLogo} width={400} height={400} alt="shirt"/>
       </Product>
       <Product className="keen-slider__slide">
        <Image  src={TshirtLogo} width={400} height={400}alt="shirt"/>
       </Product>
       <Product className="keen-slider__slide">
        <Image  src={TshirtLogo} width={400} height={400}alt="shirt"/>
       </Product>
     </HomeContainer>
  )
}
