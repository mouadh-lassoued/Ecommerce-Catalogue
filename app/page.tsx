import ProductsList from "../components/ui/ProductList"
import TheHeader from "../components/ui/theHeader"
import { Checkbox } from "@/components/ui/checkbox"

type Product ={
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function page (){
  const products = await fetch('https://fakestoreapi.com/products')    .then(res => res.json())
  const categories = Array.from(new Set(products.map((p:Product) => p.category))) as string[];
  return (<div className="bg-[#393E46]">
    <TheHeader/>
    <div className="flex "><div className="w-200 bg-[#F3F2EC] mt-10 m-3  rounded-lg">
      <div className="text-semibold p-20 pt-5 pb-5 bg-[#1E93AB] rounded-t-lg">Filters:</div>
      <div className="flex items-center gap-3">
        <ul>
          {categories.map((category:string)=>(<li key={category} className="p-3"><Checkbox/>{category}</li>))}
        </ul>
                </div>
      </div>
    <div className="m-10"><ProductsList/></div>
    </div>
    </div>
  )
}