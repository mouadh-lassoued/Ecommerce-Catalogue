"use client"
import { useRouter } from 'next/navigation';

export default function SelectionButton ({id}:{id:string}) {
    const router = useRouter();
  return (
          <button onClick={()=>router.push(`/Products/${id}`)} className="bg-[#1E93AB] text-white rounded-md px-4 py-2 mt-2 hover:bg-gray-600 transition-colors duration-200">More details</button>         
  )
}
