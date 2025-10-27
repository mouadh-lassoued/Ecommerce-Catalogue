import { Search } from "lucide-react";

export default function TheHeader() {
  return (
    <div className="bg-[#222831] flex m- h-50">
        <h1 className="text-7xl text-center font-bold  text-[#1E93AB] m-5 h-50 w-50 tracking-wide">
  Shop
  Name
        </h1>
    <div className="m-22 flex">
        <input className="w-150 h-10 rounded-l-lg bg-[#DCDCDC] text-1.7xl" type="search" placeholder="   Looking for something ?" />    
        <button className="flex h-10 items-center gap-2 px-4 py-2 bg-[#1E93AB]  rounded-r-lg hover:bg-gray-600 transition-colors duration-200">
            <Search className="w-5 h-5" />
        </button></div>
        <div className="text-2xl text-center font-bold  text-[#1E93AB] m-20 h-50 w-50 tracking-wide">call us : +*** ****************</div>    
    </div>
  )
}


