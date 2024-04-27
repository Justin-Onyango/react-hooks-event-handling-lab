// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    function Blur () {
        console.log("Hey! Eyes on me!");
    }
    function Focus() {
        console.log("Good!");
    }
    
    return (
        <button onFocus={Focus} onBlur={Blur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;
