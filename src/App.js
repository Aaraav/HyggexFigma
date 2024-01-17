import './App.css';
import Navbar from './Components/Navbar';
import Hyggex from './Components/Hyggex';
import Calculation from './Components/Calculation';
import Footer from './Components/Footer';
import Faq from './Components/Faq';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hyggex/>
     <Calculation value='9 + 6 + 7x - 2x - 3'/>
<Footer/>
<Faq/>


    </div>
  );
}

export default App;
