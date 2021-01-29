import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Content from './components/Content.jsx'

// import Footer from './components/Footer.jsx'

function App() {  
 
 const [visible, setVisible] = useState('Velkommen')

  

  var menuItems = ['ReactComp', 'Velkommen', 'Gjennbruk', 'Kart', 'Bendiks Verden'];
  
  return (
    <div className="App">
      <Header />
      <NavBar visible={visible} setVisible={setVisible} menuItems={menuItems}/>      
      <Content tag={visible} /> 
      
     
      
      {/* <Footer />      */}
    </div>
  );

}

export default App;
