"use client"

import { motion } from "framer-motion"
import { Heart, Calendar, MapPin } from "lucide-react"

export default function RSVPForm() {
  // Replace this with your actual Google Form embed URL
  const googleFormUrl = "https://forms.gle/wMELw3vqcXTyV6QX9"

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-transparent via-card/50 to-card/80">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4"
          >
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">Vui Lòng điền</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mb-6">
            Hãy cho chúng tôi biết bạn có thể tham dự được không. Chúng tôi sẽ rất vinh dự khi bạn chung vui cùng chúng tôi trong ngày đặc biệt này.
          </p>

          {/* Event Details Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>14 Tháng 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Hà Nội, Việt Nam</span>
            </div>
          </div>
        </motion.div>

        {/* Google Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background rounded-3xl shadow-lg overflow-hidden border border-border/50"
        >
          <div className="p-4 md:p-6 bg-secondary/30 border-b border-border/50">
            <h3 className="font-serif text-lg md:text-xl text-foreground text-center">Biểu Mẫu RSVP</h3>
          </div>

          {/* Responsive iframe container */}
          <div className="relative w-full" style={{ minHeight: "600px" }}>
            <iframe
              src={googleFormUrl}
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Wedding RSVP Form"
              loading="lazy"
            >
              Loading form...
            </iframe>
          </div>

          {/* Fallback link */}
          <div className="p-4 bg-secondary/20 text-center">
            <p className="text-sm text-muted-foreground">
              Having trouble with the form?{" "}
              <a
                href={googleFormUrl.replace("?embedded=true", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Open in new tab
              </a>
            </p>
          </div>
        </motion.div>

        {/* RSVP Deadline Notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Please RSVP by <span className="font-medium text-foreground">May 15th, 2025</span>
        </motion.p>
      </div>
    </section>
  )
}
