"use client"
import Logo from "./logo";
import SearchBar from "./searchBar";
import { ShoppingCart } from "lucide-react";
export default function TheHeader() {



  return (
    <div className="bg-[#222831] flex m- h-50 select-none">
        <Logo/>
        <SearchBar/>
        <div className="text-1.3xl text-center font-bold  text-[#1E93AB] m-20 h-50 w-50 tracking-wide">call us : +*** ****************</div>
        <ShoppingCart className="m-10 mt-14" size={40} color="#1E93AB" />    
    </div>
  )
}


