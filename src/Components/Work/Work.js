import React from "react";
import "./Work.css";
import vector3 from "./underline.png";
import art from './art1.png';
import photo from './Mask Group.png';
import art1 from './art2.png'
import art2 from './Vector (2).png';
import art3 from './art3.png';
import photo1 from './pic.png';


function Work() {
  return (
    <div className="work-wrapper">
      <div className="pickplan-content">
        <p>How it works</p>
        <img src={vector3} className="underline" alt="" />
      </div>
      <div className="firstdiv">
          <div className="absolutediv">
              <div className="vector"><img src={art} alt="" /></div>
              <p className="one">1</p>
              <div className="girl-pic"><img src={photo} alt="" /></div>
          </div>
          <div className="textdiv">
              <p className="text1">Setup your profile preferences</p>
              <p className="text2">Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
          </div>
      </div>
      <div className="seconddiv">
          <div className="seconddiv-container">
              <div className="art1"><img src={art1} alt="" /></div>
              <p className="two">2</p>
              <div className="art2"><img src={art2} alt="" /></div>
          </div>
          <div className="seconddiv-text">
              <p className="txt1">Review your Custom box</p>
              <p className="txt2">Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
          </div>
      </div>
      <div className="thirddiv">
          <div className="thirddiv-container">
              <div className="art3"><img src={art3} alt="" /></div>
              <p className="three">3</p>
              <div className="photo1"><img src={photo1} alt="" /></div>
          </div>
          <div className="textdiv">
              <p className="text1">Try it on at home</p>
              <p className="text2">Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
          </div>
      </div>
    </div>
  );
}

export default Work;
