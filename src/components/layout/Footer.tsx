import Link from "next/link"
import { Input } from "../ui/input"
import {RiYoutubeFill, RiFacebookBoxFill, RiInstagramFill, RiPinterestFill, RiTwitterFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center z-50">
      <div className="container mx-auto">

        
        <div className="flex flex-col gap-8">
          <div className="">
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/60">Be the first to get the latest news about trends, promotions and more!</p>
          </div>
          {/* form */}
          <form action="" className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your email address"></Input>
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent ">Join</button>
          </form>
          {/* socials */}
          <div className="flex gap-8 mx-auto text-[30px] text-white/60 mb-20">
            <Link href='/'>
              <RiYoutubeFill/>
            </Link>
            <Link href='/'>
              <RiTwitterFill/>
            </Link>
            <Link href='/'>
              <RiFacebookBoxFill/>
            </Link>
            <Link href='/'>
              <RiInstagramFill/>
            </Link>
            <Link href='/'>
              <RiPinterestFill/>
            </Link>
          </div>

        </div>
        {/* copywrite */}
        <div className="py-6 border-t border-white/5 text-white/60">
          Copywrite &copy; 2024 Bike Me. All right reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer