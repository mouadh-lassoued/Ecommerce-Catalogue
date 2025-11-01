
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
  return (<div onClick={()=>router.push('/')} style={{cursor:'pointer'}}>
            <h1  className="text-7xl text-center font-bold  text-[#1E93AB] m-5 h-50 w-50 tracking-wide">
  Shop
  Name
        </h1></div>
  )
}

export default Logo