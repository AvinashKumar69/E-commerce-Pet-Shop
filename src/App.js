import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PetProfile from './pages/PetProfile';


function App(props) {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/petprofile/:id' element={<PetProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps)(App);


