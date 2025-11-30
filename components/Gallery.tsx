"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "https://static.wikia.nocookie.net/cuttherope/images/7/7d/Om_Nom-0.png", alt: "Om Nom happy" },
  { src: "https://static.wikia.nocookie.net/cuttherope/images/2/2a/Om_Nelle.png", alt: "Om Nelle cute" },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/8/8f/Om_Nelle%E2%80%99s_appearance_in_Omzilla.jpg",
    alt: "Om Nom and Om Nelle together",
  },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/b/b2/Om_Nelle%E2%80%99s_appearance_in_Scrapbooking..jpg",
    alt: "Om Nom giving card to Om Nelle",
  },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/2/2e/Om_Nelle%E2%80%99s_appearance_in_Waiter.jpg",
    alt: "Om Nom as waiter for Om Nelle",
  },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/0/0c/Om_Nelle%E2%80%99s_appearance_in_Cooking_Time.jpg",
    alt: "Om Nom cooking for Om Nelle",
  },
  // Hidden images (shown when expanded)
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/4/49/Om_Nelle%E2%80%99s_appearance_in_Engineer.jpg",
    alt: "Om Nom building for Om Nelle",
    hidden: true,
  },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/d/d0/Om_Nelle%E2%80%99s_appearance_in_Santa.jpg",
    alt: "Om Nom and Om Nelle Christmas",
    hidden: true,
  },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/1/17/Om_Nelle%E2%80%99s_appearance_in_season_5.jpg",
    alt: "Om Nom and Om Nelle at fair",
    hidden: true,
  },
  {
    src: "https://static.wikia.nocookie.net/cuttherope/images/d/dd/Om_Nelle%E2%80%99s_appearance_at_Easter..jpg",
    alt: "Om Nom and Om Nelle Easter",
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">Our Sweet Story</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            A glimpse into our candy-filled journey together
          </p>
        </motion.div>

        {/* Gallery Grid - 2 cols mobile, 3-4 cols desktop */}
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
                className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group shimmer-border bg-gradient-to-br from-green-50 to-blue-50"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 md:group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  unoptimized
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
              className="relative max-w-3xl max-h-[80vh] w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={visibleImages[selectedImage]?.src || ""}
                alt={visibleImages[selectedImage]?.alt || ""}
                fill
                className="object-contain"
                sizes="90vw"
                unoptimized
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
