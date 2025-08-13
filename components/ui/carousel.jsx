"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const CarouselContext = React.createContext({ api: /** @type {any} */ (null), orientation: "horizontal" })

export function Carousel({
  className,
  opts,
  setApi,
  orientation = "horizontal",
  children,
  ...props
}) {
  const [emblaRef, api] = useEmblaCarousel({
    axis: orientation === "horizontal" ? "x" : "y",
    ...opts,
  })

  React.useEffect(() => {
    if (!api) return
    if (typeof setApi === "function") setApi(api)
  }, [api, setApi])

  return (
    <CarouselContext.Provider value={{ api, orientation }}>
      <div className={cn("relative", className)} {...props}>
        <div ref={emblaRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const CarouselContent = React.forwardRef(function CarouselContent(
  { className, children, ...props },
  ref
) {
  const { orientation } = React.useContext(CarouselContext)
  return (
    <div
      ref={ref}
      className={cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

export const CarouselItem = React.forwardRef(function CarouselItem(
  { className, children, ...props },
  ref
) {
  const { orientation } = React.useContext(CarouselContext)
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

export function CarouselPrevious({ className, ...props }) {
  const { api, orientation } = React.useContext(CarouselContext)
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      if (!api) return
      const canScrollPrev = api.canScrollPrev()
      setDisabled(!canScrollPrev)
    }
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={() => api && api.scrollPrev()}
      disabled={disabled && !api?.options?.loop}
      className={cn(
        "absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none disabled:opacity-50",
        orientation === "horizontal" ? "left-2 top-1/2 -translate-y-1/2" : "left-1/2 top-2 -translate-x-1/2",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  )
}

export function CarouselNext({ className, ...props }) {
  const { api, orientation } = React.useContext(CarouselContext)
  const [disabled, setDisabled] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      if (!api) return
      const canScrollNext = api.canScrollNext()
      setDisabled(!canScrollNext)
    }
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={() => api && api.scrollNext()}
      disabled={disabled && !api?.options?.loop}
      className={cn(
        "absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none disabled:opacity-50",
        orientation === "horizontal" ? "right-2 top-1/2 -translate-y-1/2" : "left-1/2 bottom-2 -translate-x-1/2",
        className
      )}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}

// For TS compatibility in JS envs
export const CarouselApi = {}


