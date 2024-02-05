'use client';
import Link from "next/link"
import { Input } from "../ui/input"
import {RiYoutubeFill, RiFacebookBoxFill, RiInstagramFill, RiPinterestFill, RiTwitterFill} from 'react-icons/ri'
import { MouseEvent, useState } from "react";
import { toast } from "../ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(email.length >= 2) {
      toast({
        title:"Thank you for your subscription!",
        description: "You will recieve the next issue of our newsletter shortly",
      });
    } else {
      toast({
        title:"Error",
        description: "Email Address must be at least 2 characters.",
      });
    }
  };
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center z-[1000]">
      <div className="container mx-auto">        
        <div className="flex flex-col gap-8">
          <div className="">
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/60">Be the first to get the latest news about trends, promotions and more!</p>
          </div>
          {/* form */}
          <div className="flex flex-col lg:flex-row gap-4 mx-6 lg:mx-16 justify-center items-center">
          <Input 
            className="w-full lg:w-3/5"
            placeholder="Your email address" 
            onChange={(e) => setEmail(e.target.value)} 
          />
            <button onClick={(e) => handleSubmit(e)} className="btn w-full lg:max-w-[150px] h-[60px] btn-accent ">Join</button>
          </div>

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