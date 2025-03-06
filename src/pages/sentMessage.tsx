import { IoMdClose } from 'react-icons/io'

type FormValues = {
  nickname: string
  content: string
}

type SentMessageProps = {
  sentMessage: FormValues[] | null
  setIsSentModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SentMessage({
  sentMessage,
  setIsSentModalOpen
}: SentMessageProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-l text-blue-500 font-bold">
            미안해요~ 지금은 가장 최근 것만 보실 수 있어요 🦔
          </h2>
          <button onClick={() => setIsSentModalOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        {sentMessage ? (
          <div className="flex flex-col gap-5 mt-4 border border-gray-700 p-4 rounded-lg">
            <p className="font-semibold text-gray-700">
              '{sentMessage[0].nickname}' 님께서 가장 최근에 보내신 편지에요
            </p>
            <p className="text-gray-700">{sentMessage[0].content}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            보내셨던 편지가 없으세요~
          </p>
        )}
      </div>
    </div>
  )
}
