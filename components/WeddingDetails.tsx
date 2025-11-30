"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MapPin, Clock, Users } from "lucide-react"

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

        {/* Parents Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center font-serif text-xl md:text-2xl text-foreground mb-8">
            Trân trọng thông báo lễ thành hôn của
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12">
            {/* Groom's side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 tracking-wide">Nhà Trai</p>
              <div className="space-y-1 md:space-y-2 mb-3 md:mb-6">
                <p className="font-serif text-sm md:text-lg text-foreground font-semibold">Ông Nguyễn Văn Vinh</p>
                <p className="font-serif text-sm md:text-lg text-foreground font-semibold">Bà Lê Thị Lệ Khánh</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">Xã Diên Khánh, Tỉnh Khánh Hòa</p>
              </div>
              <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-secondary/20 mb-3 md:mb-4">
                <Image
                  src="/LeQuang.webp"
                  alt="Quang's family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="font-serif text-sm md:text-base text-foreground font-semibold">GIUSE - Trưởng Nam</p>
              <p className="text-xs md:text-sm text-muted-foreground">Nguyễn Lê Quang</p>
            </motion.div>

            {/* Bride's side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 tracking-wide">Nhà Gái</p>
              <div className="space-y-1 md:space-y-2 mb-3 md:mb-6">
                <p className="font-serif text-sm md:text-lg text-foreground font-semibold">Ông Phêrô Đặng Thanh Tùng</p>
                <p className="font-serif text-sm md:text-lg text-foreground font-semibold">Bà Anna Nguyễn Thị Kiều Chương</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">Phường Trảng Bàng, Tỉnh Tây Ninh</p>
              </div>
              <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg bg-secondary/20 mb-3 md:mb-4">
                <Image
                  src="/ThuyTien.webp"
                  alt="Thuy Tien's family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="font-serif text-sm md:text-base text-foreground font-semibold">MARIA - Út Nữ</p>
              <p className="text-xs md:text-sm text-muted-foreground">Đặng Thị Thủy Tiên</p>
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
          {/* Date with decorative style */}
          <div className="mb-8">
            <p className="text-muted-foreground text-sm tracking-widest mb-2">THỨ NĂM</p>
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <span className="text-primary font-serif text-2xl md:text-3xl font-semibold">Tháng 11</span>
              <span className="text-5xl md:text-7xl font-serif text-primary font-bold">20</span>
              <span className="text-primary font-serif text-2xl md:text-3xl font-semibold">2025</span>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm mt-4 tracking-wider">Nhằm ngày 01 tháng 10 năm Ất Tỵ</p>
          </div>

          {/* Location */}
          <div className="mb-8">
            <div className="flex justify-center mb-3">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-2">
              Thánh lễ được cử hành tại
            </p>
            <p className="font-serif text-2xl md:text-3xl text-foreground font-bold text-primary mb-1">
              Thánh Đường Giáo Xứ Tha La
            </p>
            <p className="text-foreground text-base md:text-lg font-semibold">Vào lúc 17:00</p>
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
          <p className="text-muted-foreground text-sm tracking-widest mb-3">HÔN LỄ ĐƯỢC CỬ HÀNH TẠI</p>
          <p className="font-serif text-2xl md:text-3xl text-foreground font-bold text-primary mb-4">TƯ GIA</p>
          
          {/* Date */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <span className="text-primary font-serif text-xl md:text-2xl font-semibold">Tháng 12</span>
              <span className="text-4xl md:text-5xl font-serif text-primary font-bold">14</span>
              <span className="text-primary font-serif text-xl md:text-2xl font-semibold">2025</span>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm mt-2">Nhằm ngày 25 tháng 10 năm Ất Tỵ</p>
          </div>
          
          {/* Time */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">Vào lúc: 09:00</span>
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
