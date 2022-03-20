import { Button } from '@mui/material';
import { connect } from 'react-redux';
import './App.css';
import DummyUpdateMyName from './components/dummyUpdateMyName';
import { toggle } from './redux/pets/pets.action';


function App(props) {
  console.log("Props:-", props);

  return (
    <div className="App">
      {props.isToggle.toString()}
      <Button onClick={() => props.dispatch(toggle())}>Toogle</Button>

      <DummyUpdateMyName />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("State in APp.js:-", state.pets);
  return {
    isToggle: state.pets.isToggle
  }
}


export default connect(mapStateToProps)(App);


