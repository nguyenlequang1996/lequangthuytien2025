import Hero from "@/components/Hero"
import WeddingDetails from "@/components/WeddingDetails"
import Gallery from "@/components/Gallery"
import Countdown from "@/components/Countdown"
import RSVPForm from "@/components/RSVPForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WeddingDetails />
      <Gallery />
      <Countdown />
      <RSVPForm />
      <Footer />
    </main>
  )
}
