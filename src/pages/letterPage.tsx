import Button from '@/components/Button'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { IoMdArrowRoundBack } from 'react-icons/io'
import SentMessage from './sentMessage'

type LetterPageProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type FormValues = { nickname: string; content: string }

export default function LetterPage({ setIsOpen }: LetterPageProps) {
  const [isSentMessage, setIsSentMessage] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const { register, handleSubmit } = useForm<FormValues>()
  const [sentMessage, setSentMessage] = useState<FormValues[] | null>(() => {
    try {
      const savedMessages = localStorage.getItem('sentMessage')
      return savedMessages ? JSON.parse(savedMessages) : null
    } catch (error) {
      console.error('로컬 스토리지 데이터 불러오기 오류:', error)
      return null
    }
  })

  useEffect(() => {
    console.log(sentMessage)
  }, [sentMessage])

  useEffect(() => {
    localStorage.setItem('sentMessages', JSON.stringify(sentMessage))
  }, [sentMessage])

  async function handleLetterSubmit(data: FormValues) {
    setIsSubmit(true)

    try {
      const response = await axios.post('https://formspree.io/f/mnnjeybd', data)

      if (response.status === 200) {
        setSentMessage([data])
        localStorage.setItem('sentMessage', JSON.stringify([data]))

        setIsOpen(false)
        toast.success('전달 됐어요!', { icon: '🥰' })
      }
    } catch (error) {
      console.error('전송 중 오류 발생:', error)
      toast.error('전달에 실패했어요...', { icon: '😭' })
    } finally {
      setIsSubmit(false)
    }
  }

  return (
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
            className="w-full p-2 border border-black/10 rounded-lg focus:bg-blue-100/30 focus:outline-none"
            placeholder="무슨 닉네임으로 보내고 싶나요?"
          />

          <textarea
            {...register('content', { maxLength: 300 })}
            className="w-full h-60 p-3 border border-black/10 rounded-lg focus:bg-blue-100/30 focus:outline-none"
            placeholder="여기에 써주시면 돼요! 만약 이전에 많은 내용이 보내졌다면, 전달이 안될 수 있어요... "
          />
          <div className="flex">
            <Button
              variant="send"
              type="button"
              onClick={() => setIsSentMessage(true)}>
              보낸편지
            </Button>
            <Button
              variant="send"
              disabled={isSubmit}>
              전달하기
            </Button>
          </div>
        </form>
      </div>
      {isSentMessage && (
        <SentMessage
          sentMessage={sentMessage}
          setIsSentModalOpen={setIsSentMessage}
        />
      )}
    </div>
  )
}
