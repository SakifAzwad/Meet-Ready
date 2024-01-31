
import { sideLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Menu = () => {
    const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
        {sideLinks?.map((link)=>{
            const isActive = pathname === link.route
            return(
                <Link key={link.label} href={link.route} className={`flex gap-4 justify-start shadow-lg shadow-rose-400 bg-purple-600 rounded-lg py-2 px-4 ${isActive && 'bg-amber-400 shadow-xl shadow-rose-400 animate-bounce border-b-4'}`}>{link.icon} <p className="text-gray-200">{link.label}</p></Link>

            )
        })}
      
    </div>
  )
}

export default Menu
