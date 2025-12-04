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
        {/* Save the Date Typography */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <motion.h5
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="text-2xl md:text-4xl lg:text-5xl text-primary/90 italic font-light tracking-wider save-the-date-text"
            style={{ fontStyle: 'italic', fontSize: '60px' }}
          >
            Save the Date
          </motion.h5>
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>

        {/* Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="floating relative mb-10"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white/80 shadow-2xl romantic-photo">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-transparent to-rose-200/20 z-10 pointer-events-none" />
            <Image
              src="/Hero.webp"
              alt="Lê Quang & Thủy Tiên"
              fill
              className="object-cover object-top scale-120"
              style={{ objectPosition: "55% 30%" }}
              priority
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
            />
          </div>
          {/* Romantic glow behind photo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300/30 via-rose-300/30 to-primary/30 blur-3xl -z-10 scale-125" />
          {/* Decorative hearts around photo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0"
          >
            <Heart className="absolute -top-4 left-1/4 w-6 h-6 text-pink-300 fill-pink-300" />
            <Heart className="absolute -top-2 right-1/4 w-4 h-4 text-rose-300 fill-rose-300" />
            <Heart className="absolute bottom-0 left-1/3 w-5 h-5 text-red-300 fill-red-300" />
          </motion.div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground romantic-text mb-2">
            Lê Quang
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="inline-flex items-center justify-center my-3 md:my-5"
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-rose-400 fill-rose-400 mx-2 romantic-heart" />
          </motion.div>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground romantic-text mt-2">
            Thủy Tiên
          </h1>
        </motion.div>
        <motion.h5
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
          className="text-2xl md:text-4xl lg:text-5xl text-primary/90 mt-8 italic font-light tracking-wider save-the-date-text"
          style={{ fontStyle: 'italic', fontSize: '35px' }}
        >
          January 10, 2026
        </motion.h5>
      </div>
    </section>
  )
}
