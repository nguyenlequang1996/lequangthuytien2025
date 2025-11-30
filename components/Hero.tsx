"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background/30 to-ivory/50 pointer-events-none" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-10 text-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Heart className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-primary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Heart className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" />
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Preheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Cùng với gia đình hai bên
        </motion.p>

        {/* Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="floating relative mb-8"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/DSC08193.webp"
              alt="Emma and James"
              fill
              className="object-cover object-top scale-200" 
              style={{ objectPosition: "55% 30%" }}
              priority
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
            />
          </div>
          {/* Rose gold glow behind photo */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 scale-110" />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground rose-gold-glow">
            Lê Quang
          </h1>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block font-serif text-3xl md:text-4xl text-primary my-2 md:my-4"
          >
            &
          </motion.span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground rose-gold-glow">
            Thủy Tiên
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent my-6"
        />

        {/* Date and Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-2"
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90">Chủ Nhật, 14 Tháng 12, 2025</p>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">
            Lúc 10 Giờ Sáng
          </p>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider mt-4">
            Tây Ninh, Việt Nam
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 md:mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-muted-foreground/60"
          >
            <span className="text-xs tracking-wider mb-2">Cuộn</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
