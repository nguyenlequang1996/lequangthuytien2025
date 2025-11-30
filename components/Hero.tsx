"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background/30 to-transparent pointer-events-none" />

      {/* Decorative floating hearts */}
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

      {/* Floating candy decorations */}
      <motion.div
        className="absolute top-20 right-20 text-green-400/30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Sparkles className="w-6 h-6" />
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
          Together with their families
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="floating relative mb-8 flex items-end justify-center gap-4 md:gap-8"
        >
          {/* Om Nom */}
          <motion.div
            className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src="https://static.wikia.nocookie.net/cuttherope/images/7/7d/Om_Nom-0.png"
              alt="Om Nom"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
              unoptimized
            />
          </motion.div>

          {/* Heart between them */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary drop-shadow-lg" />
          </motion.div>

          {/* Om Nelle */}
          <motion.div
            className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
          >
            <Image
              src="https://static.wikia.nocookie.net/cuttherope/images/2/2a/Om_Nelle.png"
              alt="Om Nelle"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 192px, 224px"
              unoptimized
            />
          </motion.div>

          {/* Rose gold glow behind characters */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-125 rounded-full" />
        </motion.div>

        {/* Couple Names - Changed to Om Nom & Om Nelle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-green-600 rose-gold-glow">
            Om Nom
          </h1>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block font-serif text-3xl md:text-4xl text-primary my-2 md:my-4"
          >
            &
          </motion.span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-blue-500 rose-gold-glow">
            Om Nelle
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
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90">Saturday, June 15th, 2025</p>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">
            at Four O{"'"}Clock in the Afternoon
          </p>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider mt-4">Candy Kingdom • Sweet Valley</p>
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
            <span className="text-xs tracking-wider mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
