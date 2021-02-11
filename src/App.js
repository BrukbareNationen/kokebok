import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/structural/Header.js';
import NavBar from './components/structural/NavBar.js';
import Content from './components/structural/Content.jsx';
import NavItem from './components/structural/NavItem.jsx';
import DropdownMenu from './components/structural/DropdownMenu.jsx';
import ContentItem from './components/structural/ContentItem.jsx';


// import Footer from './components/Footer.jsx'

function App() {  
 
 const [visible, setVisible] = useState('Velkommen')

  

  var menuItems = ['ReactComp', 'Velkommen', 'Gjenbruk', 'Kart', 'Bendiks Verden'];
  var catergories = ['Grafikk', 'Gjennbruk', 'Kart', 'Embed'];

  return (
    <div className="App">
      <Header />
      <NavBar > 
        <NavItem title="Meny" >        
          <DropdownMenu visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem>
        <NavItem title="Grafikk" >        
          <DropdownMenu visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem>   
        <NavItem title="Kart" >        
          <DropdownMenu visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem>   
        <NavItem title="Gjennbruk" >        
          <DropdownMenu visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem>        
      </NavBar>


      <Content tag={visible} />      
     
      
      {/* <Footer />      */}
    </div>
  );

}

export default App;
