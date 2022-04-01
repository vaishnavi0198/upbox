import React, {useState , useEffect} from "react";
import "./navbar.css";
import logo from './Logo.png'
import hamburger from './Hamburger.svg';

function Navbar() {
  const[open , setOpen] = useState(false);
 
    const [dimensions, setDimensions] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(dimensions);
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    React.useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);
    useEffect(() => {
      if(dimensions.width > 768)
        setOpen(true)
        } , [dimensions.width]);
    
  return (
    // topbar
    <>
      <div className="topbar"> </div>
   {/* Navbar */}
      <div className='navbar'>
          <div className="upbox"> 
           <div className="upbox-logo">
              <img src={logo} alt=""  className="upbox-logo-img" />
              <span className="upbox-content">UPBOX</span>
           </div>
          </div>
          <div className="nav-item">
           {open ? <ul>
                <li className="item">THIS MONTH</li>
                <li className="item">SKIN</li>
                <li className="item">HAIR</li>
                <li className="item">BATH</li>
                <li className="item">SALE</li>
                <li><button><span className="login">LOG IN &gt;</span></button></li>
            </ul> : null
          }
            <div className="hamburger" onClick={() => setOpen(!open)}>
                        <img src={hamburger} alt="" />
             </div>
          </div>
      </div>
    </>
  );
}

export default Navbar;
