import Button from '@/components/Button'
import axios from 'axios'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { IoMdArrowRoundBack } from 'react-icons/io'

type LetterPageProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type FormValues = { nickname: string; content: string }

export default function LetterPage({ setIsOpen }: LetterPageProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>()

  async function handleLetterSubmit(data: FormValues) {
    try {
      const response = await axios.post('https://formspree.io/f/mnnjeybd', data)

      if (response.status === 200) {
        toast.success('전달 됐어요!', { icon: '🥰' })
        reset()
        setIsOpen(false)
      }
    } catch (error) {
      console.error('전송 중 오류 발생:', error)
      toast.error('전달에 실패했어요...', { icon: '😭' })
    }
  }

  return createPortal(
    <div className="fixed inset-0 w-full max-w-[600px] h-screen bg-[url('/img/도치편지지.jpg')] bg-center bg-no-repeat bg-cover mx-auto ">
      <div className="absolute inset-0 bg-white opacity-20 pointer-events-none"></div>

      <div className="my-6 mx-3">
        <div className="flex ">
          <button
            className="text-2xl text-[#3b5bdb]"
            onClick={() => setIsOpen(false)}>
            <IoMdArrowRoundBack />
          </button>
          <p className="text-2xl font-bold w-full text-center mr-6 text-[#3b5bdb]">
            전달할 내용
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleLetterSubmit)}
          className="flex flex-col gap-6 mt-10">
          <input
            {...register('nickname')}
            className="w-full p-2 border border-black/10 rounded-lg focus:bg-blue-100 focus:outline-none"
            placeholder="무슨 닉네임으로 보내고 싶나요?"
          />

          <textarea
            {...register('content')}
            className="w-full h-60 p-3 border border-black/10 rounded-lg focus:bg-blue-100 focus:outline-none"
            placeholder="여기에 써주시면 돼요! 만약 이전에 많은 내용이 보내졌다면, 전달이 안될 수 있어요... "
          />

          <Button variant="send">전달하기</Button>
        </form>
      </div>
    </div>,
    document.body
  )
}
