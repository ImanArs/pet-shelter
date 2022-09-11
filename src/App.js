import {Routes, Route} from 'react-router-dom'
import './App.css';
import Contacts from './components/Contacts/Contacts';
import FAQ from './components/FAQ/FAQ'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import PetList from './components/PetList/PetList';
import { Pet } from './components/PetList/Pet';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/Pets' element={<PetList />} />
          <Route path='/tour/:id' element={<Pet/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
