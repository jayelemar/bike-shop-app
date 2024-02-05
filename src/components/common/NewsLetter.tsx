
"use client"
import React, { FC, FormEvent } from 'react'
import { Input } from '../ui/input';
import Link from 'next/link';
import { RiFacebookBoxFill, RiInstagramFill, RiPinterestFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';
import { useToast } from '../ui/use-toast';
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form/dist';

type NewsLetterProps = {
  email: string
}

const formSchema = z.object({
  email: z.string().email("please type a valid email")
})

const NewsLetter:FC<NewsLetterProps> = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  })

  function onSubmit(data:z.infer<typeof formSchema>) {
    toast({
      title: "Thank you for your subscription!",
      description: "You'll be sent the next issue of our newsletter shortly",
    })
  }
  
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h2 className="capitalize leading-tight mb-2">
          Subscribe to our newsletter
        </h2>
        <p className="text-white/60">Be the first to get the latest news about trends, promotions and more!</p>
      </div>
      {/* form */}
      <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5'>
    <FormField
      control={form.control}
      name='email'
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="Your email address" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <button
      type='submit'
      className="btn w-full xl:max-w-[150px] h-[60px] btn-accent"
    >
      Join
    </button>
  </form>
</Form>


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
  )
}

export default NewsLetter