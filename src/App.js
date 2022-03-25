import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { firebaseConfig } from './firebase';
import Home from './pages/Home';
import PetProfile from './pages/PetProfile';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App(props) {
  // function readSession() {
  //   const user = window.sessionStorage.getItem(
	// 		`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
	// 	)
	// 	if (!user) {
  //     console.log("User is not Logged in");
      
  //   }
  // }
  // useEffect(() => {
  //   readSession()
  // }, [])
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/petprofile/:id' element={<PetProfile />} />
        <Route exact path='/user/favorite' element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps)(App);


