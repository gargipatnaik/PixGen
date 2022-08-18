import React from "react";

function Examples(){

  return (
    <div id="ex" className="examples">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">Examples</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="mainContent col-6" style={{ color:"#ffffff",fontSize:"20px"}}>
          Content And Style Image
        </div>
        <img className="col-10" src="images/stycon.jpg" alt="content_and_style_img"/>
        <br/>
        <br/>
        <div className="mainContent col-6" style={{color:"#ffffff",fontSize:"20px"}}>
          Output Image
        </div>
        <img className="col-10" src="images/fin.jpg" alt="output_img"/>
      </div>
    </div>
  );
};

export default Examples;
