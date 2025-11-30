"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/1.webp",
    alt: "Gallery image 1",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/2.webp",
    alt: "Gallery image 2",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/3.webp",
    alt: "Gallery image 3",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/4.webp",
    alt: "Gallery image 4",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/5.webp",
    alt: "Gallery image 5",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/6.webp",
    alt: "Gallery image 6",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/7.webp",
    alt: "Gallery image 7",
    blurDataURL: "/placeholder.svg",
  },
  {
    src: "/8.webp",
    alt: "Gallery image 8",
    blurDataURL: "/placeholder.svg",
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
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const [shuffledImages, setShuffledImages] = useState(galleryImages)
  
  // Xáo trộn toàn bộ mảng ảnh chỉ ở client-side để tránh hydration mismatch
  useEffect(() => {
    const arr = [...galleryImages]
    for (let i = arr.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1))
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    setShuffledImages(arr)
  }, [])
  
  const displayedImages = showAll ? shuffledImages : shuffledImages.slice(0, INITIAL_SHOW)

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

      <div className="w-full px-[5px] md:px-12 lg:px-32 xl:px-48">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-[5px]">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full aspect-video overflow-hidden bg-secondary/20"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 100vw"
                loading={index < 6 ? "eager" : "lazy"}
                quality={85}
              />
            </motion.div>
          ))}
        </div>
        {/* Nút xem thêm */}
        {!showAll && (
          <div className="flex justify-center mt-8 px-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-transparent border-none p-0 m-0 text-xs tracking-wider mb-2 text-muted-foreground/60 cursor-pointer focus:outline-none"
            >
              Xem thêm
            </button>
          </div>
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
