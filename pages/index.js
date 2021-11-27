//import '@themesberg/flowbite';
import Header from './components/Header'
import WhoIAm from './components/WhoIAm'
import Knowledge from './components/Knowledge'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import FatecBox from './components/FatecBox'
import Career from './components/Career'

export default function Home() {
  return (
    <div>
      <Header/>
      <WhoIAm/>
      <Knowledge/>
      <Career/>
      <Contacts/>
      <Projects/>      
      <FatecBox/>
    </div>
  )
}
