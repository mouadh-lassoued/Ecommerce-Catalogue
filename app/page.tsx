import ProductsList from "../components/ui/ProductList"
import TheHeader from "../components/ui/theHeader"

export default function page (){
  return (<div className="bg-[#393E46]">
    <TheHeader/>
    <div className="flex "><div className="w-200 bg-[#F3F2EC] mt-10 m-3  rounded-lg"><div className="text-semibold p-20 pt-5 pb-5 bg-[#1E93AB] rounded-t-lg">Filters:</div></div>
    <div className="m-10"><ProductsList/></div>
    </div>
    </div>
  )
}