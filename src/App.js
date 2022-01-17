import React from "react"
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Brahma from "../src/images/Brahma.jpg"
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <ItemListContainer name="Brahma" description="Lata Brahma 500 cc" image={Brahma}/>
    </React.Fragment>

  );
}

export default App;
