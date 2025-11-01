import ProductsList from "@/components/ui/ProductList";
import TheHeader from "@/components/ui/theHeader"
import FilterList from "@/components/ui/filterList"


export default async function Page( { params , } :  {params:Promise<{ searchedItem: string }>;} ) {
    const searchedItem = decodeURIComponent((await params).searchedItem);
    console.log("Search Item:", searchedItem);
  return (
<div className="bg-[#393E46] min-h-screen">
  <TheHeader />
  <div className="grid grid-cols-4 gap-6 m-6">
    <div className="col-span-1">
      <FilterList searchTerm={searchedItem} />
    </div>
    <div className="col-span-3">
      <ProductsList searchTerm={searchedItem} />
    </div>
  </div>
</div>
  );
}
