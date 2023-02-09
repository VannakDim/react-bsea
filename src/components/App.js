import logo from '../logo.svg';
import Navbar from './partial/navbar';
import Home from '../pages/home';
import Carousel from './partial/carousel';
import Foot from './footer';
import pic from '../img/bsea-logo.png';

function App() {
  return (
    <div className="App">
      <Navbar brandTitle="BSEA Cambodia" brandImg={pic}/>
      <Foot />
    </div>
  );
}

export default App;
