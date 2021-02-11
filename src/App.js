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
 const [open, setOpen] = useState(false);
 const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);
 const [open4, setOpen4] = useState(false);
  






  var menuItems = ['Velkommen', 'ReactComp', 'Gjenbruk', 'Kart', 'Bendiks Verden'];
  var catergories = ['Grafikk', 'Gjennbruk', 'Kart', 'Embed'];

  return (
    <div className="App">
      <Header />
      <NavBar > 
        
        <NavItem title="Meny" open={open} setOpen={setOpen}>        
          <DropdownMenu setOpen={setOpen} visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem>
        
        <NavItem open={open2} setOpen={setOpen2} title="Grafikk" >        
          <DropdownMenu setOpen={setOpen2} visible={visible} setVisible={setVisible} items={catergories}/>
        </NavItem>   
        
        <NavItem open={open3} setOpen={setOpen3} title="Kart" >        
          <DropdownMenu setOpen={setOpen3} visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem>   
        
        <NavItem open={open4} setOpen={setOpen4} title="Gjennbruk" >        
          <DropdownMenu setOpen={setOpen4} visible={visible} setVisible={setVisible} items={menuItems}/>
        </NavItem> 

      </NavBar>


      <Content visible={visible} />      
     
      
      {/* <Footer />      */}
    </div>
  );

}

export default App;
