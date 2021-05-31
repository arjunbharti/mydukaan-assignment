import Navbar from './components/Navbar/Navbar'
import Tips from './components/Tips/Tips'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Main /> 
      <Tips />
      <Cards />
      <Footer />    
    </div>
  );
}

export default App;
