import React from 'react'
import ScrollText from './ScrollText'
import ScImage from './ScImage'

export default function Introduction() {
  return (
    <div>
      <div className="bg-[url('/images/bg1.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="text-white h-screen py-50 fade-in flex justify-center items-start text-6xl font-bold">
          <div className="text-center leading-normal">
            기술로 더 <br />나은 일상을 만듭니다
          </div>
        </div>
      </div>
      <div className="bg-gray-100 justify-center py-60">
        <div className="text-3xl font-bold leading-normal text-center">
          우리는 기술이 어려워지는 세상에서 더 간단하고<br />
          직관적이며 사람 중심적인 기술을 만들어<br/>
          사용자의 삶을 바꾸는 서비스를 제공합니다.
        </div>
      </div>
      <div>
        <ScrollText></ScrollText>
      </div>
      <div className="py-50 text-center">
        <div className="font-bold text-5xl py-10">
          우리의 비전
        </div>
        <div className="text-3xl leading-normal">
          모두가 기술의 혜택을 누리는 세상.<br/>
          우리는 사람을 위한 기술을 만듭니다.
        </div>
      </div>
      <div>
        <ScImage></ScImage>
      </div>
    </div>
  )
}
