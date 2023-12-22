import { useRouter } from "next/router"


export default function DetaisProduct() {
  const {query} = useRouter()
 return <h1>Product Detais {JSON.stringify(query)}</h1>
}