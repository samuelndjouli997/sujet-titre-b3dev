import Header from './components/website/Header'
import Hero from './components/website/Hero'
import OurObjectif from './components/website/OurObjectif'
import About from './components/website/About'
import LatestPosts from './components/website/LatestPosts'
import OurValues from './components/website/OurValues'
import OurVision from './components/website/OurVision'
import PicturesGrid from './components/website/PicturesGrid'
import Contact from './components/website/Contact'
import Footer from './components/website/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurObjectif />
      <About />
      <LatestPosts />
      <OurValues />
      <OurVision />
      <PicturesGrid />
      <Contact />
      <Footer />
    </>
  )
}
