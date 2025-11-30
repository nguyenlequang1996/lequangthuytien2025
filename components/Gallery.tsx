"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/1.webp",
    alt: "Gallery image 1",
  },
  {
    src: "/2.webp",
    alt: "Gallery image 2",
  },
  {
    src: "/3.webp",
    alt: "Gallery image 3",
  },
  {
    src: "/4.webp",
    alt: "Gallery image 4",
  },
  {
    src: "/5.webp",
    alt: "Gallery image 5",
  },
  {
    src: "/6.webp",
    alt: "Gallery image 6",
  },
  {
    src: "/7.webp",
    alt: "Gallery image 7",
  },
  {
    src: "/8.webp",
    alt: "Gallery image 8",
  },
  {
    src: "/9.webp",
    alt: "Gallery image 9",
  },
  {
    src: "/10.webp",
    alt: "Gallery image 10",
  },
  {
    src: "/11.webp",
    alt: "Gallery image 11",
  },
  {
    src: "/12.webp",
    alt: "Gallery image 12",
  },
  {
    src: "/13.webp",
    alt: "Gallery image 13",
  },
  {
    src: "/14.webp",
    alt: "Gallery image 14",
  },
  {
    src: "/15.webp",
    alt: "Gallery image 15",
  },
]

const INITIAL_SHOW = 6

export default function Gallery() {
  const [displayCount, setDisplayCount] = useState(INITIAL_SHOW)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const displayedImages = galleryImages.slice(0, displayCount)
  const hasMore = displayCount < galleryImages.length

  return (
    <section className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 py-12 md:py-16 px-4"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">Câu Chuyện Của Chúng Tôi</h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
          Những khoảnh khắc đáng nhớ trong hành trình của chúng tôi
        </p>
      </motion.div>

      <div className="w-full">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-0">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(index)}
              className="relative w-full aspect-video overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-center mt-8 px-4"
          >
            <button
              onClick={() => setDisplayCount(galleryImages.length)}
              className="bg-transparent border-none p-0 m-0 text-xs tracking-wider mb-2 text-muted-foreground/60 cursor-pointer focus:outline-none"
            >
              Xem thêm
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh] w-full aspect-square md:aspect-auto rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src || ""}
              alt={galleryImages[selectedImage].alt || ""}
              fill
              className="object-contain"
              sizes="95vw"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 rounded-full text-sm text-foreground">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
