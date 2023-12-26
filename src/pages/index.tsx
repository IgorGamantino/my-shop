import { styled } from "@/styles"



const Button = styled("button",{
  
  span: {
    backgroundColor: "#4944"
  },
  "&:hover": {
    color: "#ff4da6"
  }
})



export default function Home() {
  return (
    <Button>
    <span>Hello world </span>

    </Button>
  )
}
