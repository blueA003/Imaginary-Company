'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false); 

  const headerList = [
    { value: "회사 소개", path: "/about" },
    { value: "공지사항", path: "/notice" },
    { value: "고객센터", path: "/support" },
    { value: "자주 묻는 질문", path: "/faq" }
  ];

  const handle = (path: string) => {
    router.push(path)
  }
  
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between border-b border-gray-200 py-2 bg-white">
      <div>
        <div className="h-full w-full flex justify-center items-center px-10 ">
          <Image src={'/images/icon.jpg'} alt='icon' width={40} height={40}/>
          <div className="pl-3 text-4xl font-bold">
            VCSoluna
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="hidden sm:flex flex-row px-10">
          {headerList.map((item, index)=>(
            <div key={index} className="px-2">
              <div className="p-3 hover:bg-gray-200 hover:text-blue-500 rounded cursor-pointer" onClick={() => handle(item.path)}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center sm:hidden pr-3">
          <FiMenu className="text-3xl cursor-pointer" onClick={()=> setOpen(true)}/>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-[320px] bg-white z-1 transform
            transition-transform duration-300 border-b border-gray-200 sm:hidden ${
            open ? 'translate-y-0' : 'translate-y-[-320px]'}`}
        >
          <div className="p-4 flex justify-end">
            <AiOutlineClose onClick={()=> setOpen(false)} className="text-3xl cursor-pointer hover:text-gray-400"/>
          </div>
          <div className="px-4 space-y-2">
            {headerList.map((item, index) => (
              <div
                key={index}
                className="py-2 text-lg hover:text-blue-500 cursor-pointer border-b border-gray-400"
                onClick={() => {
                  handle(item.path);
                  setOpen(false);
                }}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
