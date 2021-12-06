import Header from './components/Header'
import WhoIAm from './components/WhoIAm'
import Knowledge from './components/Knowledge'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import FatecBox from './components/FatecBox'
import Career from './components/Career'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
          <title>Jairo Junior</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header/>
        <WhoIAm/>
        <Knowledge/>
        <Career/>
        <Contacts/>
        <Projects/>      
        <FatecBox/>
        <Footer/>
      </div>
    </>
  )
}
