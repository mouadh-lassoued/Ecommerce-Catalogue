import React from 'react'
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function  SearchBar  () {
      const [searchTerm, setSearchTerm] = useState("");
        const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }
const router = useRouter();
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

const handleSearch = () => {
  if (!searchTerm) return;
  router.push(`/Items/${searchTerm}`);
};
  return (
        <div className="m-22 flex">
        <input value={searchTerm} onChange={handleSearchChange} onKeyDown={handleKeyDown} className="w-150 h-10 rounded-l-lg bg-[#DCDCDC] text-1.7xl" type="search" placeholder="   Looking for something ?" />    
        <button onClick={handleSearch} className="flex h-10 items-center gap-2 px-4 py-2 bg-[#1E93AB]  rounded-r-lg hover:bg-gray-600 transition-colors duration-200">
            <Search className="w-5 h-5" />
        </button></div>
  )
}