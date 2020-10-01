import React from 'react'


const backStyles = {
    // marginTop: 85,
    // paddingLeft: 45,
    // color: "black",
    // position: "fixed"
  }

const TopBar = ({title}) => {
   return (
    <div className="topbar">
        <span id="backButton" style={backStyles}><a className="backy" href="javascript:window.history.back();">&#8636; back</a></span><center><h1 style={{color: "black"}}>{title}</h1></center>
    </div>
   )
}

export default TopBar
