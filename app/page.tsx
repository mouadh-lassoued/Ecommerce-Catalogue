import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Product ={
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function ProductsList (){
  const products = await fetch('https://fakestoreapi.com/products')    .then(res => res.json())
  return (<>
    <div ><ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">{products.map((product:Product)=>(<li key={product.id}>
      <Card>
          <CardHeader><img src={product.image} alt={product.title} className="h-48 w-full object-contain"/></CardHeader>
          <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description.slice(0,200)}...</CardDescription>
        <CardFooter>{product.price}$</CardFooter>
        </Card></li>))}</ul></div>
  </>)
}