import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border-0 px-4 py-2 text-sm font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-4 gap-2 [&>svg]:pointer-events-none transition-all duration-300 shadow-sm hover:shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200/50 [a&]:hover:from-blue-100 [a&]:hover:to-purple-100",
        secondary:
          "bg-gray-100 text-gray-700 border border-gray-200 [a&]:hover:bg-gray-200",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-white text-gray-700 border border-gray-300 [a&]:hover:bg-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    (<Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />)
  );
}

export { Badge, badgeVariants }
