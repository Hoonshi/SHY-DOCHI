import { cn } from '@/util/cn'
import { cva } from 'class-variance-authority'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'send' | 'move'
}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), className)}
    />
  )
}

const buttonVariants = cva(
  'py-2 px-4 rounded-md font-semibold hover:opacity-50',
  {
    variants: {
      variant: {
        move: 'bg-transparent pl-0.5 py-0 mt-1 ml-1 text-black"',
        send: 'bg-[#3b5bdb] text-white w-[25%] mx-auto'
      }
    },
    defaultVariants: {
      variant: 'move'
    }
  }
)
