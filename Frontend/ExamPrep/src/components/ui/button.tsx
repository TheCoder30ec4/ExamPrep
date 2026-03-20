/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-headline font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary hover:bg-primary-dim active:translate-x-0.5 active:translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
        tertiary:
          "bg-tertiary-fixed text-on-tertiary-fixed hover:scale-95 shadow-[0_4px_0_0_#beee00] active:translate-y-1 active:shadow-none",
        ghost:
          "text-on-surface hover:bg-surface-container",
        secondary:
          "bg-secondary text-on-secondary hover:bg-secondary-dim",
        destructive:
          "bg-error text-on-error hover:bg-error-dim",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm rounded-xl",
        sm: "h-8 px-4 text-xs rounded-lg",
        lg: "h-14 px-10 text-xl rounded-xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
