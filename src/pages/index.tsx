import { Footer, HomeContainer ,Name,Price,Product} from "@/styles/pages/home";
import Image from "next/image";


import TshirtLogo from "@/assets/IgniteTshirt.png"
export default function Home() {
  return (
     <HomeContainer>
       <Product>
        <Image  src={TshirtLogo} width={400} height={400} alt="shirt"/>

        <Footer>
          <Name>Camiseta X</Name>
          <Price>R$ 19,99</Price>
        </Footer>
       </Product>
       <Product>
        <Image  src={TshirtLogo} width={400} height={400} alt="shirt"/>
       </Product>
       <Product>
        <Image  src={TshirtLogo} width={400} height={400} alt="shirt"/>
       </Product>
       <Product>
        <Image  src={TshirtLogo} width={400} height={400}alt="shirt"/>
       </Product>
     </HomeContainer>
  )
}
