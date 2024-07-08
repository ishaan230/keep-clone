import React from "react";

function Footer(){
    let currentYear = new Date().getFullYear()
    return(
        <footer className="footer">Copyright {currentYear}</footer>
    )
}

export default Footer