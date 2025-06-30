"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function ScrollText() {
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
    <div className="py-20 bg-[url('/images/bg8.jpg')] bg-center bg-cover bg-no-repeat text-white">
      <div
        ref={ref}
        className="text-5xl font-bold text-center"
      >
        우리가 하는 일
      </div>
      <div 
        className={`
          transition-all duration-3000 ease-out 
          text-center text-lg 
          opacity-0 translate-y-10 space-y-8
          ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
      >
        <div>
          <p className="font-semibold">디지털 금융 플랫폼 개발</p>
          <p>쉽고 안전한 금융 경험을 제공합니다</p>
        </div>
        <div>
          <p className="font-semibold">모바일 서비스 설계 및 운영</p>
          <p>일상 속 다양한 문제를 앱 하나로 해결할 수 있도록 설계합니다</p>
        </div>
        <div>
          <p className="font-semibold">데이터 기반 의사결정 지원 도구</p>
          <p>기업과 개인 모두를 위한 스마트 데이터 솔루션.</p>
        </div>
      </div>
    </div>
  )
}
