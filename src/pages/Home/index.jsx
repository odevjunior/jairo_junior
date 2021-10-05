import './style.css';

import Header from '../../components/Header';
import QuemSouEu from '../../components/QuemEuSou';
import KnowLedge from '../../components/Knowledge';
import Projects from '../../components/Projects/Index';

const Home = () => (
    <>
        <Header/>
        <QuemSouEu/>
        <KnowLedge/>
        <Projects/>
    </>
)

export default Home;