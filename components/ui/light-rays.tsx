"use client"

import { useEffect, useState, type CSSProperties, forwardRef } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  theme?: "coolBlue" | "warmGlow" | "multiColor"
  blur?: number
  speed?: number
  length?: string
}

type LightRay = {
  id: string
  left: number
  rotate: number
  width: number
  swing: number
  delay: number
  duration: number
  intensity: number
}

const createRays = (count: number, cycle: number): LightRay[] => {
  if (count <= 0) return []

  return Array.from({ length: count }, (_, index) => {
    const left = 8 + Math.random() * 84
    const rotate = -28 + Math.random() * 56
    const width = 160 + Math.random() * 160
    const swing = 0.8 + Math.random() * 1.8
    const delay = Math.random() * cycle
    const duration = cycle * (0.75 + Math.random() * 0.5)
    const intensity = 0.6 + Math.random() * 0.5

    return {
      id: `${index}-${Math.round(left * 10)}`,
      left,
      rotate,
      width,
      swing,
      delay,
      duration,
      intensity,
    }
  })
}

const Ray = ({
  left,
  rotate,
  width,
  swing,
  delay,
  duration,
  intensity,
}: LightRay) => (
  <motion.div
    className="pointer-events-none absolute -top-[12%] left-(--ray-left) h-(--light-rays-length) w-(--ray-width) origin-top -translate-x-1/2 rounded-full bg-linear-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-(--light-rays-blur)"
    style={
      {
        "--ray-left": `${left}%`,
        "--ray-width": `${width}px`,
      } as any
    }
    initial={{ rotate }}
    animate={{
      opacity: [0, intensity, 0],
      rotate: [rotate - swing, rotate + swing, rotate - swing],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
      repeatDelay: duration * 0.1,
    }}
  />
)

export const LightRays = forwardRef<HTMLDivElement, LightRaysProps>(
  (
    {
      className,
      style,
      theme = "coolBlue",
      count = 7,
      blur = 36,
      speed = 14,
      length = "100vh",
      ...props
    },
    ref
  ) => {
    const [rays, setRays] = useState<LightRay[]>([])
    const cycleDuration = Math.max(speed, 0.1)

    let color = "rgba(3, 52, 153, 0.25)" 
    if (theme === "warmGlow") color = "rgba(255, 120, 180, 0.08)"
    if (theme === "multiColor") color = "rgba(35, 105, 250, 0.25), rgba(3, 52, 153, 0.50)"

    useEffect(() => {
      setRays(createRays(count, cycleDuration))
    }, [count, cycleDuration])

    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none fixed inset-0 isolate overflow-hidden",
          className
        )}
        style={
          {
            "--light-rays-color": color,
            "--light-rays-blur": `${blur}px`,
            "--light-rays-length": length,
            ...style,
          } as any
        }
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={
              {
                background: `radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)`,
              } as any
            }
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={
              {
                background: `radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)`,
              } as any
            }
          />
          {rays.map((ray) => (
            <Ray key={ray.id} {...ray} />
          ))}
        </div>
      </div>
    )
  }
)

LightRays.displayName = "LightRays"
