"use client"

import { motion } from "framer-motion"

export default function RSVPForm() {
  // Replace this with your actual Google Form embed URL
  const googleFormUrl = "https://forms.gle/wMELw3vqcXTyV6QX9"

  return (
    <section className="py-6 md:py-8 px-4 bg-gradient-to-b from-transparent via-card/50 to-card/80">
              <div className="flex items-center justify-center gap-2">
          <span className="text-sm md:text-xl text-muted-foreground mt-2">Trong trường hợp khẩn cấp có thể liên hệ qua SĐT:</span>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-sm md:text-xl text-muted-foreground mt-2">0367634325 (Quang) hoặc 0922657655 (Tiên)</span>
        </div>
      <div className="max-w-3xl mx-auto">
        {/* Google Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background rounded-3xl shadow-lg overflow-hidden border border-border/50"
        >
          {/* Responsive iframe container */}
          <div className="relative w-full">
            <iframe
              src={googleFormUrl}
              width="100%"
              style={{ minHeight: "1100px", height: "100%" }}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Wedding RSVP Form"
              scrolling="no"
              allow="clipboard-write"
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
      </div>
    </section>
  )
}
