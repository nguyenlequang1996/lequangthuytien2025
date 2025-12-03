"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function WeddingDetails() {
  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
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
          <div className="text-1xl md:text-2xl text-foreground mb-2">
            Gửi đến những người thân thương nhất của chúng mình,
          </div>
          <div className="text-1xl md:text-2xl text-foreground mb-2">
            Sau 6 năm cùng nhau đi qua bao kỷ niệm, chúng mình <span className="text-primary" style={{ fontWeight: 'bold' }}>Lê Quang & Thủy Tiên</span> – đã quyết định
            viết nên chương mới của câu chuyện tình yêu này, với sự chúc phúc và đồng thuận của
            hai bên gia đình. Chúng mình vô cùng hạnh phúc khi được gửi đến cả nhà tấm thiệp mời
            đặc biệt này, nơi cả nhà có thể cùng chia sẻ niềm vui, xem lại những hình ảnh kỷ niệm,
            và cùng chứng kiến khoảnh khắc thiêng liêng trong lễ thành hôn của chúng mình.
          </div>
        </motion.div>

        {/* Parents Section - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-1"
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
              <div className="text-lg md:text-xl text-foreground font-semibold">Chú Rể</div>
              <div className="text-xl md:text-4xl text-muted-foreground text-primary" style={{ paddingBottom: '15px' }}>Nguyễn Lê Quang</div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-secondary/20 mb-4 max-w-sm mx-auto">
                <Image
                  src="/LeQuang.webp"
                  alt="Quang's family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-1xl md:text-2xl text-muted-foreground mb-4 tracking-wide uppercase">Nhà Trai</p>
              <div className="mb-6 min-h-[120px] flex flex-col justify-start">
                <div className="text-sm md:text-2xl text-foreground mb-1">Ông Nguyễn Văn Vinh</div>
                <div className="text-sm md:text-2xl text-foreground mb-1">Bà Lê Thị Lệ Khánh</div>
                <div className="text-sm md:text-2xl text-muted-foreground mt-3">Diên Khánh, Tỉnh Khánh Hòa</div>
              </div>


            </motion.div>

            {/* Bride's side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-lg md:text-xl text-foreground font-semibold">Cô Dâu</div>
              <div className="text-xl md:text-4xl text-muted-foreground text-primary" style={{ paddingBottom: '15px' }}>Đặng Thị Thủy Tiên</div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-secondary/20 mb-4 max-w-sm mx-auto">
                <Image
                  src="/ThuyTien.webp"
                  alt="Thuy Tien's family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-1xl md:text-2xl text-muted-foreground mb-4 tracking-wide uppercase">Nhà Gái</p>
              <div className="mb-6 min-h-[120px] flex flex-col justify-start">
                <div className="text-sm md:text-2xl text-foreground mb-1">Ông Đặng Thanh Tùng</div>
                <div className="text-sm md:text-2xl text-foreground mb-1">Bà Nguyễn Thị Kiều Chương</div>
                <div className="text-sm md:text-2xl text-muted-foreground mt-3">Trảng Bàng, Tỉnh Tây Ninh</div>
              </div>
            </motion.div>
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
          <div className="text-2xl md:text-3xl text-primary font-bold mb-4">Trung tâm Hôi nghị - Tiệc Cưới Phúc Thịnh An </div>

          {/* Date */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-2">
              <span className="text-xl md:text-2xl text-primary font-semibold">Tháng 1</span>
              <span className="text-4xl md:text-5xl text-primary font-bold">10</span>
              <span className="text-xl md:text-2xl text-primary font-semibold">2026</span>
            </div>
            <div className="text-xl text-muted-foreground">(Nhằm ngày 22 tháng 11 năm Ất Tỵ)</div>
          </div>

          {/* Time */}
          <span className="text-xl md:text-5xl text-primary font-bold">Đón khách: 17:00 - Khai tiệc: 18:00</span>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-sm md:text-2xl text-muted-foreground mt-2">Cây số 9 - Đường 23/10 - Diên An - Diên Khánh - Khánh Hoà</span>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.876540989138!2d109.1202416!3d12.256633100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705cf4a682fa3f%3A0xf6e1499fabcdc362!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSBQaMO6YyBUaOG7i25oIEFu!5e0!3m2!1sen!2s!4v1764783588137!5m2!1sen!2s" 
            width="100%" height="250px" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-sm md:text-2xl text-muted-foreground mt-2">Trong trường hợp khẩn cấp có thể liên hệ: 0367634325 (Quang) hoặc 0922657655 (Tiên)</span>
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
