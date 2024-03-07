import React, { useState } from 'react';
import './resize.css';
import ContactForm from '../components/ContcatForm';
import ViewContact from '../components/ViewContact';
import Sidebar from '../components/Window/Sidebar';

const Home = () => {

  return (
<>
<div className="app">
    <Sidebar/>
      <div className="main-content">
        Main Content
        <ContactForm/>
      </div>
 
    </div>
         <div className="bottom-content">
    {/* <ViewContact/> */}
       </div>
</>
    
  );
};

export default Home;
