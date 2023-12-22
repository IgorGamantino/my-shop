import { styled } from "@/styles"


const Text = styled("p",{
  fontSize: 50,
  fontFamily: "$roboto",
  fontWeight: "bold"
  
})


export default function Home() {
  return (
    <Text>Hello world </Text>
  )
}
