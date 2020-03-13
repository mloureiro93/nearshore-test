import React from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Title from './components/Title'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
    
   <Header></Header>
   <Navbar></Navbar>
   <Jumbotron></Jumbotron>
   <Title></Title>
   <Cards></Cards>
   <Footer></Footer>
      
   </div>
  );
}

export default App;
