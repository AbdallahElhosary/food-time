import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home"
import Explore from './components/Explore/Explore';
import Delivery from './components/Delivery/Delivery';
import BigImg from './components/BigImg/BigImg';
import Pockets from './components/Pockets/Pockets';
import Frequently from './components/Frequently/Frequently';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Explore />
      <Delivery />
      <BigImg />
      <Frequently />
      <Pockets />
      <Footer />
    </div>
  );
}

export default App;
