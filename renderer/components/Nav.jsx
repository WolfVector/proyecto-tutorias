import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

function Nav() {
  return (
    <div className='bg-black w-full text-center'>
      <div className="float-left text-white pt-2.5 pl-2">
        <Link href="/homeApp">
         <a><AiFillHome /></a>
        </Link>
      </div>
      <div className='text-white py-2'>Tutorías</div>
    </div>
  )
}

export default Nav