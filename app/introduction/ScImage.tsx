"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function ScImage() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
      const currentRef = ref.current;
    
      if (!currentRef) return;
    
      const observer = new IntersectionObserver(([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, { threshold: 0.3 });
    
      observer.observe(currentRef);
    
      return () => {
        observer.unobserve(currentRef); 
      };
    }, []);
// IntersectionObserver 화면에 얼마나 보이는지 감지하는 브라우저 API
// entry.isIntersecting 뷰포트에 진입했는지 여부를 true / false로 반환
// threshold: 0.3 요소가 30퍼센트 보이면 isIntersecting = true
// 해당 요소를 감시 시작 observer.observe(currentRef);
// 컴포넌트 unmount 시 감시 해제 observer.unobserve(currentRef);

  return (
    <div ref={ref} className="bg-gray-100 py-8 overflow-hidden">
      <div className="text-center text-5xl py-4 font-aggro">
        핵심 가치
      </div>
      <div className="grid grid-cols-4 grid-rows-6 gap-2 h-screen p-4">
        <div className={`
          bg-[url('/images/bg2.jpg')] bg-center bg-cover bg-no-repeat
          col-span-2 row-span-4 bg-gray-200 border
          transition-all duration-2000 ease-out rounded-md
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}>
          <div className="h-full w-full text-white text-6xl flex justify-center items-center">
            사용자 중심
          </div>
        </div>
        <div className={`
          bg-[url('/images/bg3.jpg')] bg-center bg-cover bg-no-repeat
          col-span-2 row-span-2 bg-gray-300 border
          transition-all duration-2000 ease-out rounded-md
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
        `}>
          <div className="h-full w-full text-white text-6xl flex justify-center items-center">
            간결함
          </div>
        </div>
        <div className={`
          bg-[url('/images/bg4.jpg')] bg-center bg-cover bg-no-repeat
          col-span-2 row-span-2 bg-gray-300 border
          transition-all duration-2000 ease-out rounded-md
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
        `}>
          <div className="h-full w-full text-white text-6xl flex justify-center items-center">
            보안
          </div>
        </div>
        <div className={`
          bg-[url('/images/bg5.jpg')] bg-center bg-cover bg-no-repeat
          col-span-4 row-span-2 bg-gray-200 border 
          transition-all duration-2000 ease-out rounded-md
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <div className="h-full w-full text-white text-6xl flex justify-center items-center">
            끊임없는 도전
          </div>
        </div>
      </div>
    </div>
  )
}
