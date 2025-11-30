import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import RSVPForm from "@/components/RSVPForm"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <RSVPForm />
      <Footer />
    </main>
  )
}
