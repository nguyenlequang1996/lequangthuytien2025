"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MapPin, Clock } from "lucide-react"

export default function WeddingDetails() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl text-foreground mb-8">
            Trân trọng thông báo lễ thành hôn của
          </h3>
        </motion.div>

        {/* Parents Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-16 items-start">
            {/* Groom's side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">Nhà Trai</p>
              <div className="mb-6 min-h-[120px] flex flex-col justify-start">
                <div className="text-sm md:text-base text-foreground mb-1">Ông Nguyễn Văn Vinh</div>
                <div className="text-sm md:text-base text-foreground mb-1">Bà Lê Thị Lệ Khánh</div>
                <div className="text-sm text-muted-foreground mt-3">Xã Diên Khánh, Tỉnh Khánh Hòa</div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-secondary/20 mb-4 max-w-sm mx-auto">
                <Image
                  src="/LeQuang.webp"
                  alt="Quang's family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-lg md:text-xl text-foreground font-semibold">Chú Rể</div>
              <div className="text-lg md:text-xl text-muted-foreground">Nguyễn Lê Quang</div>
            </motion.div>

            {/* Bride's side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">Nhà Gái</p>
              <div className="mb-6 min-h-[120px] flex flex-col justify-start">
                <div className="text-sm md:text-base text-foreground mb-1">Ông Đặng Thanh Tùng</div>
                <div className="text-sm md:text-base text-foreground mb-1">Bà Nguyễn Thị Kiều Chương</div>
                <div className="text-sm text-muted-foreground mt-3">Phường Trảng Bàng, Tỉnh Tây Ninh</div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-secondary/20 mb-4 max-w-sm mx-auto">
                <Image
                  src="/ThuyTien.webp"
                  alt="Thuy Tien's family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-lg md:text-xl text-foreground font-semibold">Cô Dâu</div>
              <div className="text-lg md:text-xl text-muted-foreground">Đặng Thị Thủy Tiên</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-12"
        />

        {/* Main Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          {/* Date */}
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-2 uppercase tracking-widest">Thứ Năm</div>
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-2">
              <span className="text-2xl md:text-3xl text-primary font-semibold">Tháng 11</span>
              <span className="text-5xl md:text-7xl text-primary font-bold">20</span>
              <span className="text-2xl md:text-3xl text-primary font-semibold">2025</span>
            </div>
            <div className="text-sm text-muted-foreground">Nhằm ngày 01 tháng 10 năm Ất Tỵ</div>
          </div>

          {/* Location */}
          <div className="mb-8">
            <div className="flex justify-center mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-xl md:text-2xl text-foreground mb-2">
              Thánh lễ được cử hành tại
            </div>
            <div className="text-2xl md:text-3xl text-primary font-bold mb-2">
              Thánh Đường Giáo Xứ Tha La
            </div>
            <div className="text-base md:text-lg text-foreground font-semibold">Vào lúc 17:00</div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"
        />

        {/* Reception Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="text-sm text-muted-foreground mb-3 uppercase tracking-widest">Hôn Lễ Được Cử Hành Tại</div>
          <div className="text-2xl md:text-3xl text-primary font-bold mb-4">TƯ GIA</div>
          
          {/* Date */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-2">
              <span className="text-xl md:text-2xl text-primary font-semibold">Tháng 12</span>
              <span className="text-4xl md:text-5xl text-primary font-bold">14</span>
              <span className="text-xl md:text-2xl text-primary font-semibold">2025</span>
            </div>
            <div className="text-sm text-muted-foreground">Nhằm ngày 25 tháng 10 năm Ất Tỵ</div>
          </div>
          
          {/* Time */}
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-foreground font-semibold">Vào lúc: 09:00</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
        </motion.div>
      </div>
    </section>
  )
}
