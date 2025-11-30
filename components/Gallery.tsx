"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/romantic-couple-engagement-photo-garden.jpg",
    alt: "Engagement photo in garden",
  },
  {
    src: "/couple-laughing-candid-romantic-sunset.jpg",
    alt: "Candid laughing moment",
  },
  {
    src: "/elegant-couple-formal-portrait-romantic.jpg",
    alt: "Formal portrait",
  },
  {
    src: "/couple-holding-hands-romantic-close-up.jpg",
    alt: "Holding hands close-up",
  },
  {
    src: "/romantic-couple-beach-sunset-silhouette.jpg",
    alt: "Beach sunset silhouette",
  },
  {
    src: "/couple-dancing-romantic-soft-lighting.jpg",
    alt: "Dancing together",
  },
  // Hidden images (shown when expanded)
  {
    src: "/couple-picnic-romantic-park.jpg",
    alt: "Romantic picnic",
    hidden: true,
  },
  {
    src: "/couple-coffee-shop-date-romantic.jpg",
    alt: "Coffee shop date",
    hidden: true,
  },
  {
    src: "/couple-hiking-adventure-mountain-romantic.jpg",
    alt: "Adventure hiking",
    hidden: true,
  },
  {
    src: "/couple-cooking-together-kitchen-romantic.jpg",
    alt: "Cooking together",
    hidden: true,
  },
]

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const visibleImages = isExpanded ? galleryImages : galleryImages.filter((img) => !img.hidden)

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">Our Story</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            A glimpse into our journey together
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group shimmer-border"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 md:group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                {/* Hover overlay - desktop only */}
                <div className="absolute inset-0 bg-primary/0 md:group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand/Collapse Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full px-6"
          >
            <span className="mr-2">{isExpanded ? "Show Less" : "View More Photos"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl max-h-[80vh] w-full aspect-square rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visibleImages[selectedImage]?.src || ""}
                alt={visibleImages[selectedImage]?.alt || ""}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
