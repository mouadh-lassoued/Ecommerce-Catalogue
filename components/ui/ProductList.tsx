import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SelectionButton from "@/components/ui/selectionButton";
type Product ={
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function ProductsList ({ searchTerm }: { searchTerm: string }) {
  const products = await fetch('https://fakestoreapi.com/products')    .then(res => res.json());
  const filteredProducts: Array<Product> = products.filter((p:Product) => p.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  if (filteredProducts.length === 0) {
    return (<div className="flex flex-col items-center justify-center h-64 text-center bg-gray-100 rounded-lg p-8 m-10 border border-gray-300">
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-4h6v4m2 0a2 2 0 100-4H7a2 2 0 100 4h10z"
        />
      </svg>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">No products found</h2>
      <p className="text-gray-500">Try searching with a different term or check back later.</p>
    </div>)
  } else {
  return(<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">{filteredProducts.map((product:Product)=>(<li key={product.id}>
      <Card>
          <CardHeader><img src={product.image} alt={product.title} className="h-48 w-full object-contain"/></CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <div className=""></div>
        <CardDescription>{product.description.slice(0,200)}...</CardDescription>
        <CardFooter className="flex items-center justify-between ">
          <div>{product.price}$</div>
          <SelectionButton id={product.id.toString()}/>
          </CardFooter>
        
        </Card></li>))}</ul>);}
  }

