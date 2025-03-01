import { cn } from '@/util/cn'
import { cva } from 'class-variance-authority'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({ className, variant, ...props }: ButtonProps) {
  console.log(buttonVariants({ variant }))
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
        primary: 'bg-gradient-to-r from-primary-500 to-primary-700 text-black',
        secondary: 'bg-purple-700 text-white'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
