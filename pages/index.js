import Header from './components/Header'
import WhoIAm from './components/WhoIAm'
import Knowledge from './components/Knowledge'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <WhoIAm/>
      <Knowledge/>
      <Projects/>
      <Footer/>
    </div>
  )
}
