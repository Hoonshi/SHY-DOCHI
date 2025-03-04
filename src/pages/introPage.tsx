import Button from '@/components/Button'
import { useState } from 'react'
import LetterPage from './letterPage'

export default function IntroPage() {
  const [isOpen, setisOpen] = useState<boolean>(false)

  return (
    <>
      <div className=" p-5 relative max-w-s top-8 bg-[#EAEAEA] text-black rounded-full text-center leading-7">
        안녕하세요~ 반가워요 🦔
        <br></br>익명으로 할 말이 있으시면, 제가 전해드릴게요~
        <br></br>답장은,,, 챙겨올 수 없지만,,, 보내드릴순 있어요!
        <Button
          variant="move"
          onClick={() => setisOpen(true)}>
          여기 눌러주세요!
        </Button>
        <div className="absolute bottom-[1px] left-[14rem] w-0 h-0 border-l-8 border-l-transparent border-t-15 border-t-[#EAEAEA] border-r-10 border-r-transparent transform translate-y-full"></div>
      </div>
      {isOpen && <LetterPage setIsOpen={setisOpen} />}
    </>
  )
}
