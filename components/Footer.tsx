"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-card/80 to-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/40" />
          <Heart className="w-5 h-5 text-primary/60" fill="currentColor" />
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        {/* Message */}
        <p className="font-serif text-xl md:text-2xl text-foreground mb-2">We can{"'"}t wait to celebrate with you!</p>
        <p className="text-muted-foreground text-sm md:text-base mb-6">With love,</p>
        <p className="font-serif text-2xl md:text-3xl text-foreground">Emma & James</p>

        {/* Hashtag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground text-sm tracking-wider">Share your photos with us</p>
          <p className="font-serif text-lg md:text-xl text-primary mt-1">#EmmaAndJames2025</p>
        </motion.div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/60 mt-8">© 2025 Emma & James Wedding</p>
      </motion.div>
    </footer>
  )
}
