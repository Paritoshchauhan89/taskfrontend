import React, { useState } from 'react';
import './resize.css';
import ContactForm from '../components/ContcatForm';
import { Link } from 'react-router-dom';
import ViewContact from '../components/ViewContact';

const Home = () => {
  const [sidebarWidth, setSidebarWidth] = useState(200);

  const handleResize = (e) => {
    const newWidth = e.clientX;
    setSidebarWidth(newWidth);
  };

  return (
<>
<div className="home-w">
<div className="app">
      <div className="sidebar" style={{ width: sidebarWidth}}>
        <div className="resize-handle" 
             onMouseDown={() => {
                document.addEventListener('mousemove', handleResize);
                document.addEventListener('mouseup', () => {
                  document.removeEventListener('mousemove', handleResize);
                });
              }}
        />
        <div className="menu-content">
          <ul>
          <li><h3>Aditi Mantri</h3></li>
            <li><Link to='/add-contact'><button className='add-button'>Add Contact</button></Link></li>
            <li><Link to='/view-contact'><button className='edit-button'>Show Contacts</button></Link></li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <ContactForm/>
      </div>
 
    </div>
    <div className="main-content">
        Main Content
        <ViewContact/>
      </div>
</div>
    
</>
    
  );
};

export default Home;
