import Button from '@/components/Button'

export default function IntroPage() {
  return (
    <div className=" p-5 relative max-w-s top-10 bg-[#EAEAEA] text-black rounded-full text-center leading-7">
      안녕하세요 🤗
      <br></br>영훈님에게 익명으로 할 말이 있으시면, 제가 전해드릴게요~
      <br></br>다만,, 답장은,,, 제가 챙겨올 수 없지만,,, 보내드릴순 있어요!
      <Button
        variant="secondary"
        className="bg-transparent pl-0.5 py-0 m-0 text-black">
        여기 눌러주세요!
      </Button>
      <div className="absolute bottom-[1px] left-[14rem] w-0 h-0 border-l-8 border-l-transparent border-t-15 border-t-[#EAEAEA] border-r-10 border-r-transparent transform translate-y-full"></div>
    </div>
  )
}
