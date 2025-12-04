"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-01-10T18:00:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null
  }

  const CountdownUnit = ({
    value,
    label,
  }: {
    value: number
    label: string
  }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl" />
        <span className="text-3xl md:text-4xl font-bold text-primary font-serif relative z-10">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-medium">
        {label}
      </p>
    </div>
  )
  return (
    <section className="py-6 md:py-16 px-4 bg-gradient-to-b from-secondary/5 to-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
            Chúng ta sẽ gặp nhau trong
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Bao Nhiêu Ngày Nữa?
          </h2>
        </div>

        {/* Countdown Grid */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <CountdownUnit value={timeLeft.days} label="Ngày" />
          <CountdownUnit value={timeLeft.hours} label="Giờ" />
          <CountdownUnit value={timeLeft.minutes} label="Phút" />
          <CountdownUnit value={timeLeft.seconds} label="Giây" />
        </div>

        {/* Target Date */}
        <p className="mt-8 text-primary font-serif text-lg md:text-xl">
          10 Tháng 1, 2026
        </p>
      </div>
    </section>
  )
}
