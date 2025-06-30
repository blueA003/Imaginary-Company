'use client'
import React from 'react'

const footer = [
  { value: "이름", valueKey: "박민석" },
  { value: "주소", valueKey: "경기도 안양시" },
  { value: "연락처", valueKey: "010-2842-1184" },
  { value: "이메일", valueKey: "gogurye77@naver.com" }
]

const footerLink = [
  { value: "github", valueKey: "https://github.com/blueA003" },
  { value: "Portfolio", valueKey: "https://www.pmsportfolio.com/" }
]

export default function Footer() {
  return (
    <footer className="bg-[rgb(36,36,36)] w-full">
      <div className="flex justify-start flex-wrap bg-[rgb(36,36,36)] py-14 px-6 max-w-[1140px] w-full mx-auto">
        <div className="pr-[50px] bg-[rgb(36,36,36)]">
          {footer.map((item, index) => (
            <div key={index} className="py-[1px] w-full text-[aliceblue] text-left bg-[rgb(36,36,36)] text-sm">
              {item.value}: {item.valueKey}
            </div>
          ))}
        </div>
        <div className="bg-[rgb(36,36,36)] pb-[5px]">
          <div className="w-full bg-[rgb(36,36,36)] text-[aliceblue] text-[20px] pb-[5px] font-bold flex items-center">
            Link
          </div>
          {footerLink.map((item, index) => (
            <a
              key={index}
              href={item.valueKey}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[rgb(36,36,36)] text-[rgb(141,141,211)] pl-[10px] flex items-center border-l-[4px] border-[rgb(228,228,228)] text-sm hover:underline"
            >
              {item.value}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
