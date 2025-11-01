import { Checkbox } from "@/components/ui/checkbox"

type Product ={
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function FilterList ({ searchTerm }: { searchTerm: string }) {
      const products = await fetch('https://fakestoreapi.com/products')    .then(res => res.json())
      const filteredProducts: Array<Product> = products.filter((p:Product) => p.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
      const categories = Array.from(new Set(filteredProducts.map((p:Product) => p.category))) as string[];
  return (<>
  <div className="h-screen bg-[#F3F2EC] mt-10 m-3  rounded-lg">
          <div className="text-semibold w-auto p-2 pt-1/3 pb-1/3 bg-[#1E93AB] rounded-t-lg">Filters:</div>
      <div className="flex items-center gap-3">
        <ul>
          {categories.map((category:string)=>(<li key={category} className="p-3"><Checkbox/>{category}</li>))}
        </ul>
                </div>
      </div>
      </>
  )
}
