import React,{useState} from 'react'
import '../../Pages/resize.css'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(200);

    const handleResize = (e) => {
      const newWidth = e.clientX;
      setSidebarWidth(newWidth);
    };
  return (
    <>
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
            <li><Link to='/view-contact'><button className='edit-button'>Show the Contact</button></Link></li>
          </ul>
        </div>
      </div>
    
    </>
  )
}

export default Sidebar